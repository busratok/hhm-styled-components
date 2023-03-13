import Header from "./components/Header";
import Container from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import content from "./data";
import Card from "./components/Card";
import Footer from "./components/Footer";

const styles = {
  colors: {
    primary: "#7284AC",
    secondary: "#122351",
  },
  breakpoints: {
    md: "700px",
    sm: "392px",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      <Container>
        <Header />
        {content.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
