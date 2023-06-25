import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, baseQueryWithReauth } from "./apiConfig";

const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: baseQueryWithReauth(baseQuery),
  endpoints(builder) {
    return {
      getData: builder.mutation({
        query: (request) => {
          return {
            url: request.url,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useGetDataMutation } = appApi;
export { appApi };
