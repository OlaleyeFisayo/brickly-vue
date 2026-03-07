import type {
  Ref,
} from "vue";
import {
  getFileContent,
} from "@brickly/file-explorer";
import {
  API_KEY,
} from "@features/file-tree/variables";
import {
  useQuery,
} from "@tanstack/vue-query";
import {
  computed,
} from "vue";

export function useGetFileContent(path: Ref<string | null>) {
  return useQuery({
    queryKey: computed(() => API_KEY.fileContent(path.value ?? "")),
    queryFn: () => getFileContent(path.value!),
    enabled: computed(() => !!path.value),
    staleTime: Infinity,
  });
}
