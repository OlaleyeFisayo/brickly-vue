import {
  defineStore,
} from "pinia";
import {
  computed,
} from "vue";
import {
  useSearchParams,
} from "@/shared/hooks/use-search-params";

export type PanelId
  = | "file-explorer"
    | "search-component"
    | "components";

export const DEFAULT_ACTIVE_PANEL: PanelId = "file-explorer";

const PANEL_IDS: PanelId[] = [
  "file-explorer",
  "search-component",
  "components",
];

function isPanelId(panel: string | undefined): panel is PanelId {
  return panel !== undefined && PANEL_IDS.includes(panel as PanelId);
}

export const usePanelMenuStore = defineStore(
  "panel-menu",
  () => {
    const params = useSearchParams();

    const activePanel = computed<PanelId>({
      get() {
        const panel = params.panel;

        if (isPanelId(panel))
          return panel;

        params.panel = DEFAULT_ACTIVE_PANEL;

        return DEFAULT_ACTIVE_PANEL;
      },
      set(panel) {
        params.panel = panel;
      },
    });

    function setActivePanel(panel: PanelId) {
      activePanel.value = panel;
    }

    return {
      activePanel,
      setActivePanel,
    };
  },
);
