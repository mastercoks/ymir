import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { router } from "../routes";
import { GlobalStyle, theme } from "../styles";

export const AppProvider: React.FC = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    <GlobalStyle />
  </ThemeProvider>
);
