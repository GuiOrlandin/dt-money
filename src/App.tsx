import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import { GLobalstyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GLobalstyle />
      <Transactions />
    </ThemeProvider>
  );
}
