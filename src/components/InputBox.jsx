import { useRef, useState } from "react";
import { useTodoStore } from "../store/TodoStore";
import { useTheme } from "../context/ThemeProvider";
import Circle from "./Circle";
import styled from "styled-components";

const Component = styled.form`
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 1px 6px 0 hsla(235, 24%, 19%, 0.493);
  padding: 24px 0;
  padding-left: 3.8rem;
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${({$colors}) => $colors.backgroundMain};
  & input{
    width: 100%;
    color: ${({$colors}) => $colors.colorMain};
    font-size: 18px;
  }
`

function InputBox() {
  const addItemToTodoList = useTodoStore((state) => state.addItemToTodoList);
  const [input, setInput] = useState("");
  const [isActive , setIsActive] = useState(false)
  const colors = useTheme()
  const inputEle = useRef()

  const submitTodo = (e) => {
    if (e.key === "Enter") {
      e.target.value.trim().length !== 0 ? addItemToTodoList(input) : "";
      setInput("");
    }
  };

  return (
    <Component
      onSubmit={(e) => e.preventDefault()}
      $colors={colors}
    >
      <Circle isActive={isActive}/>
      <input
        ref={inputEle}
        placeholder="Create New Todo..."
        type="text"
        value={input}
        onFocus={()=> setIsActive(true)}
        onBlur={()=> setIsActive(false)}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => submitTodo(e)}
      />
    </Component>
  );
}

export default InputBox;
