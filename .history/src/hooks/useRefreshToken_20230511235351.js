import { getToken } from "utils/auth";

export function useRefreshToken() {
  async function refresh() {
    const { refreshToken } = getToken();
    if (!refreshToken) return null;
  }
}
