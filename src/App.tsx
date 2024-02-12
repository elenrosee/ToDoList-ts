import "../node_modules/modern-normalize/modern-normalize.css";
import { Container } from "./App.styled";
import { GlobalStyle } from "./GlobalStyle";
import { ToDoForm, ToDoList } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ToDoForm />
        <ToDoList />
      </Container>
    </>
  );
}

export default App;
