import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
export const baseUrl = import.meta.env.VITE_BASE_URL
console.log(baseUrl)
type BaseQueryType = ReturnType<typeof fetchBaseQuery>;
export const baseQueryWithReauth: (baseQuery: BaseQueryType) => BaseQueryType =
  (baseQuery) => async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
      window.location.href = "/";
    }
    return result;
  };
export const baseQuery = fetchBaseQuery({
  baseUrl,
});
export const apiConfig = {
    Klines: {
    Get: "v3/klines?",
  },
 
};
