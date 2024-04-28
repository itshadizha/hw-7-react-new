import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [errorText, setErrorText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      setErrorText("This field shouln't be empty");
    } else {
      addTodo(value);
      setValue("");
      setErrorText("");
    }
  };

  return (
    <FormContainer>
      <FormStyled onSubmit={submitHandler} action="">
        <InputStyled
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter new todo"
        />

        <ButtonSubmit type="submit">Add task</ButtonSubmit>
        {errorText && <ErrorText>{errorText}</ErrorText>}

      </FormStyled>
    </FormContainer>
  );
};

export default TodoForm;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
`;

const FormStyled = styled.form`
  display: flex;
  align-items: center;
`;

const InputStyled = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 465px;
  font-size: 17px;
  height: 40px;
  outline: none;
`;

const ButtonSubmit = styled.button`
  padding: 10px 20px;
  width: 150px;
  font-size: 17px;
  height: 45px;
  background-color: #f063dd;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
`;

const ErrorText = styled.p`
  position: absolute;
  color: red;
  top: 50px;
`;
