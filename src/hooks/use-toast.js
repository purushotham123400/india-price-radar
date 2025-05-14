
// Import the original toast functions from shadcn
import { useToast as useToastOriginal } from "@/components/ui/shadcn-toast";

// Re-export for use in components
export const useToast = useToastOriginal;
export const toast = useToastOriginal().toast;
