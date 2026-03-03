import {
  useClipboard as useVueUseClipboard,
} from "@vueuse/core";
import {
  toast,
} from "vue-sonner";

export function useClipboard() {
  const {
    copy,
    copied,
    isSupported,
  } = useVueUseClipboard();

  const copyToClipboard = async (value: string) => {
    await copy(value);
    if (!isSupported) {
      toast.error("Your browser does not support Clipboard API");
    }
    if (!copied) {
      toast.error("Failed to Copy");
    }
    if (copied) {
      toast.success("Copied");
    }
  };

  return {
    copyToClipboard,
  };
}
