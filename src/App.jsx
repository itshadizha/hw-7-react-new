import "./App.css";
import GorgeousButtons from "./components/gorgeous buttons/GorgeousButtons";
import InputValue from "./components/input/InputValue";
import PhonesShop from "./components/phones shop/PhonesShop";
import TodoWrapper from "./components/todo-list/TodoWrapper";
import styled from "styled-components";

function App() {
  return (
    <>
      <Title>Task 1</Title>
      <GorgeousButtons />

      <Title>Task 2</Title>
      <TodoWrapper />

      <Title>Task 3</Title>
      <PhonesShop />

      <Title>Task 4</Title>
      <InputValue />
    </>
  );
}

export default App;

const Title = styled.h1`
  color: #8080808d;
`