import type {
  ActivityBarItems,
} from "./types";
import {
  IconComponents,
  IconFile,
} from "@tabler/icons-vue";
import FileTreeContainer from "../file-tree/component/file-tree-container.vue";

export const ActivityBarList: ActivityBarItems[] = [
  {
    title: "Files",
    Icon: IconFile,
    view: FileTreeContainer,
  },
  {
    title: "Components",
    Icon: IconComponents,
    view: FileTreeContainer,
  },
];
