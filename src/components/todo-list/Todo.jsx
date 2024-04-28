import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";

const Todo = ({ todo, onDeleteTodo, onToggleTodo, onEditTodo }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [changingText, setChangingText] = useState(todo.todo);

  const openEditHandler = () => setIsOpenEdit((prev) => !prev);

  const inputValueHandler = (e) => setChangingText(e.target.value);

  const submitChangedText = (e) => {
    e.preventDefault();
    onEditTodo(todo.id, changingText);
    setIsOpenEdit((prev) => !prev);
  };

  return (
    <TodoContainer isCompleted={todo.isCompleted}>
      {isOpenEdit ? (
        <EditForm onSubmit={submitChangedText}>
          <InputStyled
            onChange={inputValueHandler}
            value={changingText}
            type="text"
          ></InputStyled>
          <ButtonSave type="submit">Save</ButtonSave>
        </EditForm>
      ) : (
        <TextContainer>
          <input type="checkbox" onClick={() => onToggleTodo(todo.id)} />
          <TextTodo>{todo.todo}</TextTodo>
          <ActionsContainer>
            <EditIcon onClick={openEditHandler} />

            <MdDeleteIcon onClick={() => onDeleteTodo(todo.id)} />
          </ActionsContainer>
        </TextContainer>
      )}
    </TodoContainer>
  );
};

export default Todo;

const TodoContainer = styled.div`
  ${({ isCompleted }) =>
    isCompleted
      ? `
    padding: 15px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #c5bfc4;
    text-decoration: line-through 2px grey;
  `
      : ``}
`;

const TextContainer = styled.div`
  display: flex;
  gap: 10px;
  color: hotpink;
`;

const MdDeleteIcon = styled(MdDelete)`
  padding: 4px;
  border-radius: 4px;
  background-color: #edeef6;
  width: 25px;
  height: 25px;
  color: hotpink;
`;

const TextTodo = styled.p`
  width: 100%;
  font-size: 18px;
  word-break: break-all;
`;

const InputStyled = styled.input`
  padding: auto;
  border: none !important;
  width: 100%;
  font-size: 17px;
`;

const EditForm = styled.form`
  display: flex;
  width: 100%;
  gap: 20px;
`;

const ButtonSave = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 60px;
  font-size: 17px;
  background-color: #f063e9;
  color: white;
  font-weight: bold;
  &:active {
    background-color: #6d1d49;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const EditIcon = styled(AiFillEdit)`
  padding: 4px;
  border-radius: 4px;
  background-color: #edeef6;
  width: 25px;
  height: 25px;
`;
