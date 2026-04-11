import {
  getRootInfo,
} from "@brickly/file-explorer";
import {
  queryOptions,
} from "@tanstack/vue-query";

const FILE_EXPLORER_QUERY_KEYS = {
  rootInfo: ["rootInfo"],
};

export function rootInfoQueryOptions() {
  return queryOptions({
    queryKey: FILE_EXPLORER_QUERY_KEYS.rootInfo,
    queryFn: getRootInfo,
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
