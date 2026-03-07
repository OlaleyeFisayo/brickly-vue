import type {
  Codemirror,
} from "vue-codemirror";

type CodemirrorProps = InstanceType<typeof Codemirror>["$props"];
export type CodemirrorOnReadyPayload = Parameters<NonNullable<CodemirrorProps["onReady"]>>[0];

export type EditorStates = {
  tabSize: CodemirrorProps["tabSize"];
  indentWithTab: CodemirrorProps["indentWithTab"];
  style: CodemirrorProps["style"];
};
