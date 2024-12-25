import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 60,
  },

  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 16,
  },

  loginContainer: {
    position: "absolute",
    top: "80%",
    width: "100%",
    paddingHorizontal: 40,
    gap: 12, // 버튼 사이 간격 추가
  },

  kakaoButton: {
    backgroundColor: "#FEE500",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  appleButton: {
    backgroundColor: "#000000",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  kakaoText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
  absoluteFill: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  appleText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  errorText: {
    color: "#ff3b30",
    marginTop: 8,
    textAlign: "center",
  },

  loadingOverlay: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
