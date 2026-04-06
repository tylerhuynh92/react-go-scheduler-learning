import type { IconButtonProps } from "@chakra-ui/react";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export type ColorMode = "light" | "dark";

export { useColorMode, useColorModeValue };

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      aria-label="Toggle color mode"
      size="sm"
      ref={ref}
      icon={<ColorModeIcon />}
      {...props}
    />
  );
});