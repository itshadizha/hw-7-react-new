import React from "react";
import styled from "styled-components";

const Todos = ({ children }) => {
  return <ListContainer>{children}</ListContainer>;
};

export default Todos;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
  background-color: #edeef6;
  border-radius: 4px;
  padding: 20px;
  width: 600px;
`;
