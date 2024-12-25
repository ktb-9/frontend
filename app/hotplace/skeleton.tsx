import React from "react";
import { View, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const WebViewSkeleton = () => {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      {/* 상단 타이틀 스켈레톤 */}
      <View
        style={{
          height: 20,
          width: "60%",
          backgroundColor: "#E8E8E8",
          borderRadius: 4,
          marginBottom: 20,
        }}
      />

      {/* 컨텐츠 영역 스켈레톤 */}
      <View
        style={{
          height: 200,
          width: "100%",
          backgroundColor: "#E8E8E8",
          borderRadius: 8,
          marginBottom: 15,
        }}
      />

      {/* 텍스트 라인 스켈레톤 */}
      {[...Array(5)].map((_, index) => (
        <View
          key={index}
          style={{
            height: 15,
            width: `${Math.random() * 40 + 60}%`,
            backgroundColor: "#E8E8E8",
            borderRadius: 4,
            marginBottom: 10,
          }}
        />
      ))}
    </View>
  );
};

export default WebViewSkeleton;
