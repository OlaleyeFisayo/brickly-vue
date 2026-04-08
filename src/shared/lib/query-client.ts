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
        const message = axiosError?.response?.data
          ? axiosError.response.data.message
          : axiosError.message;
        toast.error(message);
      },
    },
  },
});
