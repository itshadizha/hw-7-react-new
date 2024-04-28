import { AiFillEdit } from "react-icons/ai";
import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

const InputValue = () => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [value, setValue] = useState("Some Todo");

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const openeditHandler = () => {
    setIsOpenEdit((prev) => !prev);
  };

  const saveChangedValue = () => {
    setIsOpenEdit((prev) => !prev)
  }

  return (
    <MainContainer>
      <Container head={true}>
        <h1>Title</h1>
        <IoIosMenu />
      </Container>

      <Container>
        {isOpenEdit ? (
          <>
            <input type="text" value={value} onChange={changeValue} />
            <button onClick={saveChangedValue}>Save</button>
          </>
        ) : (
          <>
            <h2>{value}</h2>
            <AiFillEdit onClick={openeditHandler} />
          </>
        )}
      </Container>

      <List>+ Add a card</List>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 10px;
  margin: 0 auto;
  width: 400px;
  height: 300px;
  flex-direction: column;
  display: flex;
  gap: 10px;
  background-color: violet;
`;

const Container = styled.div`
  ${({ head }) =>
    head
      ? `
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: violet;
`
 : ` 
    background-color: #afaf98;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
    `}
`;

const List = styled.div`
  font-size: 22px;
`;

export default InputValue;

