import type {
  Ref,
} from "vue";
import {
  getFileContent,
} from "@brickly/file-explorer";
import {
  useQuery,
} from "@tanstack/vue-query";
import {
  computed,
} from "vue";
import {
  VUE_CONTENT_TREE_API_KEY,
} from "./variables";

export function useGetFileContent(path: Ref<string | null>) {
  return useQuery({
    queryKey: computed(() => VUE_CONTENT_TREE_API_KEY.fileContent(path.value ?? "")),
    queryFn: () => getFileContent(path.value ?? ""),
    enabled: computed(() => !!path.value),
    staleTime: Infinity,
  });
}
