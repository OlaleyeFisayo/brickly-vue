import type {
  UseSearchParamsVariables,
} from "@shared/types";
import {
  useUrlSearchParams,
} from "@vueuse/core";

const params = useUrlSearchParams<UseSearchParamsVariables>("history");

export function useSearchParams() {
  return params;
}
