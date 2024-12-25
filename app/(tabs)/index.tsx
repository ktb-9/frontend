import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import { WebView } from "react-native-webview";
import { useRouter } from "expo-router";
import styles from "./styles";
import { handleNavigationStateChange } from "@/hooks/api/handleNavigationStateChange";
import {
  AXIOS_BASE_URL,
  REDIRECT_URI,
  TOKEN_KEY,
  USER_INFO_KEY,
} from "@/constants/api";
import { useRecoilState } from "recoil";
import authState from "@/recoil/authState";
import * as AppleAuthentication from "expo-apple-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import fetchAppleLogin from "@/api/user/fetchApple";

export default function LoginScreen() {
  const [showWebView, setShowWebView] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [, setUser] = useRecoilState(authState);

  const handleKakaoLogin = () => {
    setError(null);
    setShowWebView(true);
  };

  const handleAppleLogin = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      // Apple로부터 받은 identityToken을 백엔드로 전송
      const response = await fetchAppleLogin(credential.identityToken);

      // 토큰 및 사용자 정보 저장
      await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(response.tokens));
      await AsyncStorage.setItem(USER_INFO_KEY, JSON.stringify(response.user));

      setUser(response.user);
      router.replace("/home/home");
    } catch (e: any) {
      if (e.code === "ERR_CANCELED") {
        setError("Apple 로그인이 취소되었습니다.");
      } else {
        setError("Apple 로그인 중 오류가 발생했습니다.");
      }
    }
  };

  if (showWebView) {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri: `${AXIOS_BASE_URL}/auth/kakao/login?redirectUri=${encodeURIComponent(
              REDIRECT_URI
            )}`,
          }}
          onNavigationStateChange={(navState) =>
            handleNavigationStateChange({
              navState,
              setShowWebView,
              setError,
              router,
              setUser,
            })
          }
          style={{ flex: 1 }}
        />
        {isLoading && (
          <View style={[styles.absoluteFill, styles.loadingOverlay]}>
            <ActivityIndicator size="large" color="#000000" />
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.appName}>리플 트립</Text>
      </View>

      <View style={styles.loginContainer}>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TouchableOpacity
          testID="kakao"
          style={styles.kakaoButton}
          onPress={handleKakaoLogin}
        >
          <Text style={styles.kakaoText}>카카오로 시작하기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          testID="apple"
          style={styles.appleButton}
          onPress={handleAppleLogin}
        >
          <Text style={styles.appleText}>Apple로 시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
