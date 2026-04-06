import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import theme from "../../chakra/theme";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}