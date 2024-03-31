import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "./components/theme-provider";
import { Router } from "./routes";
import i18n from "@/locals/i18n";
import Container from "./components/Container";
import { Layout } from "./layout";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider defaultTheme="system">
        <Container>
          <Layout>
            <Router />
          </Layout>
        </Container>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
