import type {
  Extension,
} from "@codemirror/state";
import type {
  ComputedRef,
} from "vue";
import {
  css,
} from "@codemirror/lang-css";
import {
  html,
} from "@codemirror/lang-html";
import {
  javascript,
} from "@codemirror/lang-javascript";
import {
  json,
} from "@codemirror/lang-json";
import {
  markdown,
} from "@codemirror/lang-markdown";
import {
  sass,
} from "@codemirror/lang-sass";
import {
  vue,
} from "@codemirror/lang-vue";
import {
  computed,
} from "vue";

function getExtension(filePath: string): Extension {
  const ext = filePath.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "ts":
      return javascript({
        typescript: true,
      });
    case "js":
    case "mjs":
    case "cjs":
      return javascript();
    case "vue":
      return vue();
    case "json":
      return json();
    case "css":
      return css();
    case "scss":
    case "sass":
      return sass();
    case "html":
      return html();
    case "md":
      return markdown();
    default:
      return javascript();
  }
}

export function useLanguageExtension(filePath: ComputedRef<string>) {
  return computed(() => getExtension(filePath.value));
}
