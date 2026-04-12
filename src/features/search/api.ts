import type {
  Ref,
} from "vue";
import {
  searchFiles,
} from "@brickly/file-explorer";
import {
  queryOptions,
} from "@tanstack/vue-query";
import {
  computed,
} from "vue";

const SEARCH_QUERY_KEYS = {
  searchQuery: (value: string) => ["search", value],
};

export function useSearchFiles(query: Ref<string>) {
  return queryOptions({
    queryKey: computed(() => SEARCH_QUERY_KEYS.searchQuery(query.value)),
    queryFn: () => searchFiles(query.value),
    enabled: computed(() => query.value.length > 0),
  });
}
