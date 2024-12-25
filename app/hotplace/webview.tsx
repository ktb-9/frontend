import React, { Suspense } from "react";
import { View, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { useLocalSearchParams, useRouter } from "expo-router";
import Header from "@/components/common/Header/header";
import WebViewSkeleton from "./skeleton";

const WebViewContent = ({ url }: { url: string }) => {
  return (
    <WebView
      source={{ uri: url }}
      mediaPlaybackRequiresUserAction={true}
      allowsInlineMediaPlayback={false}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState
    />
  );
};

export default function WebViewScreen() {
  const { url } = useLocalSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header title="여행지 정보" onPress={() => router.back()} />
        <Suspense fallback={<WebViewSkeleton />}>
          <WebViewContent url={url as string} />
        </Suspense>
      </View>
    </SafeAreaView>
  );
}
