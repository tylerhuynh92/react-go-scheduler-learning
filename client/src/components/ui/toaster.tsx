import { useToast, type UseToastOptions } from "@chakra-ui/react";

export function useToaster() {
  const toast = useToast();
  return {
    create: (options: UseToastOptions) => toast(options),
    success: (title: string, description?: string) =>
      toast({ title, description, status: "success", duration: 4000, isClosable: true }),
    error: (title: string, description?: string) =>
      toast({ title, description, status: "error", duration: 4000, isClosable: true }),
    info: (title: string, description?: string) =>
      toast({ title, description, status: "info", duration: 4000, isClosable: true }),
    warning: (title: string, description?: string) =>
      toast({ title, description, status: "warning", duration: 4000, isClosable: true }),
  };
}

// No-op — v2 renders toasts via ChakraProvider automatically
export const Toaster = () => null;