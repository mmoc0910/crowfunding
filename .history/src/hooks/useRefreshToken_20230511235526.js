import axios from "api/axios";
import { updateUser } from "store/auth/auth-slice";
import { getToken, saveToken } from "utils/auth";

export function useRefreshToken() {
  async function refresh() {
    const { refreshToken } = getToken();
    if (!refreshToken) return null;
    const response = await axios.post("/token", {
      "Content-Type": "Application/json",
      refreshToken: refreshToken,
    });
    if (!response.data) return null;
    saveToken(response.data.accessToken, response.data.refreshToken);
    updateUser((prev) => ({
      ...prev,
      accessToken: response.data.accessToken,
    }));
    return response.data.accessToken || "";
  }
  return refresh;
}
