import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";
import { useTodoStore } from "../store/TodoStore";

const Component = styled.button`
  color: ${({ $colors }) => $colors.colorGrayish};
  font-size: 16px;
  cursor: pointer;
  grid-area: right;
  &:hover {
    color: ${({  $colors }) => $colors.colorMain};
  }
`;

function ClearCompleted() {
  const clearCompleted = useTodoStore((state) => state.clearCompleted);
  const colors = useTheme();
  return (
    <Component className="clear" $colors={colors}  onClick={clearCompleted}>
      Clear Completed
    </Component>
  );
}

export default ClearCompleted;
