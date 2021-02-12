import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  main: {
    d: "#004d4a",
    m: "#478e8e",
    l: "#1df0e7",
  },
};
export const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: { bg: "#fff" },
    },
  },
});
