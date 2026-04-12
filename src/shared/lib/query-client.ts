import type {
  AxiosError,
} from "axios";
import {
  QueryClient,
} from "@tanstack/vue-query";
import {
  toast,
} from "vue-sonner";

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error: unknown) => {
        const axiosError = error as AxiosError<{ message: string }>;
        const message = axiosError.code === "ERR_NETWORK" ? "Start the dev server to perform actions" : axiosError.response?.data?.message;
        toast.error(
          "Failed to perform action",
          {
            description: message,
          },
        );
      },
    },
  },
});
