import type {
  Icon,
} from "@tabler/icons-vue";
import type {
  Component,
} from "vue";

export type ActivityBarItemsTitle = "Files" | "Components";

export type ActivityBarItems = {
  title: ActivityBarItemsTitle;
  Icon: Icon;
  view: Component;
};
