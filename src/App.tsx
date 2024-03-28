import { ThemeProvider } from "./components/theme-provider";
import { Router } from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Router />
    </ThemeProvider>
  );
}

export default App;
