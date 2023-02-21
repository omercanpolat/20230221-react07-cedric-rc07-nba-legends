import Container from "react-bootstrap/Container";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <CardContainer />
    </Container>
  );
}

export default App;
