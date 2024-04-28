import { useState } from "react";
import { generateId } from "./utils/index";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import TodoList from "./TodoList";
import styled from "styled-components";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (value) => {
    const newTodo = {
      id: generateId(),
      todo: value,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const editTodoHandler = (id, changingText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { todo, todo: changingText } : todo))
    );
  };

  const deleteAllHandler = ()=> {
    setTodos([])
  }

  const completeAllHandler = () => {
    setTodos((prev) => 
  prev.map((todo) => ({...todo, isCompleted: true}))
  )
  }

  const unCompleteAllHandler = () => {
    setTodos((prev) => 
  prev.map((todo) => ({...todo, isCompleted: false}))
  )
  }

  return (
    <TodoWrapperStyled>
      <TodowrapperTitle>TODO LIST</TodowrapperTitle>
      <TodoForm addTodo={addTodoHandler} />

<ButtonsContainer> 
<ButtonsStyled onClick={deleteAllHandler}>Delete ALL </ButtonsStyled>
<ButtonsStyled onClick={completeAllHandler}>Complete ALL </ButtonsStyled>
<ButtonsStyled onClick={unCompleteAllHandler}>Uncomplete ALL </ButtonsStyled>


</ButtonsContainer>

      {todos.length === 0 ? (
        <NoTodosText>EMPTY...</NoTodosText>
      ) : (
        <Todos>
          <TodoList
          onEditTodo={editTodoHandler}
            onToggleTodo={toggleTodoHandler}
            todos={todos}
            onDeleteTodo={deleteTodoHandler}
          />
        </Todos>
      )}
    </TodoWrapperStyled>
  );
};

export default TodoWrapper;

const TodoWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TodowrapperTitle = styled.h1`
  color: #6e708a;
  margin-bottom: 20px;
`;

const NoTodosText = styled.div`
  font-size: 20px;
  font-weight: bold;
  gap: 20px;
  margin-top: 15px;
  background-color: #edeef6;
  border-radius: 4px;
  text-align: center;
  border: 4px dashed gray;
  opacity: 0.5;
  padding: 20px;
  width: 600px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
`

const ButtonsStyled = styled.button`
  padding: 5px 10px;
  background-color: #f063dd;
  border-radius: 5px;
  border: none;
`