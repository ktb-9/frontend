import { AXIOS_BASE_URL } from "@/constants/api";
import { axiosInstance } from "../axiosinstance";

const fetchAppleLogin = async (identityToken: string | null) => {
  if (identityToken === null) {
    throw new Error("Identity token is required");
  }

  try {
    const response = await axiosInstance.post(
      `${AXIOS_BASE_URL}/auth/apple/callback`,
      {
        identityToken,
      },
      {
        headers: {
          "Skip-Auth": true,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Apple login error:", error);
    throw error;
  }
};
export default fetchAppleLogin;
