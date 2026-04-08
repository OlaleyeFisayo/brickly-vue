import {
  useUrlSearchParams,
} from "@vueuse/core";

const params = useUrlSearchParams<{
  vueFile?: string;
  panel?: string;
}>("history");

export function useSearchParams() {
  return params;
}
