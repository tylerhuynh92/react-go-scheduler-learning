import { Tooltip as ChakraTooltip, type TooltipProps as ChakraTooltipProps } from "@chakra-ui/react";
import * as React from "react";

export interface TooltipProps extends Omit<ChakraTooltipProps, "content"> {
  content: React.ReactNode;
  disabled?: boolean;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip({ content, disabled, children, ...rest }, _ref) {
    if (disabled) return <>{children}</>;
    return (
      <ChakraTooltip label={content} {...rest}>
        {children}
      </ChakraTooltip>
    );
  },
);