import React from "react";
import { useTodoStore } from "../store/TodoStore";
import Circle from "./Circle";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../context/ThemeProvider";
import styled from "styled-components";

const Component = styled.li`
  padding: 24px 0;
  padding-left: 3.8rem;
  position: relative;
  border-bottom: 1px solid
    ${({ $colors }) =>
      $colors.theme == "light"
        ? $colors.colorGrayish
        : $colors.colorVeryGrayish};
    display: flex;
    align-items: center;
  div{
    display: flex;
    align-items: center;
    p {
      font-size: 18px;
      letter-spacing: 2px;
      font-weight: 500;
      &.completed {
        text-decoration: line-through;
        font-style: italic;
      }
      color: ${({ $colors, $isCompleted }) =>
        $isCompleted
          ? $colors.theme == "light"
            ? $colors.colorGrayish
            : $colors.colorVeryGrayish
          : $colors.colorMain};
    }
    .delete-btn{
      cursor: pointer;
      position: absolute;
      right: 15px;
      display: none;
    }
  }
  &:hover{
    .delete-btn{
      display: block
    }
  }
`;

function Todo({ todo }) {
  const deleteTodo = useTodoStore((state) => state.deleteitemFromTodos);
  const colors = useTheme();

  return (
    <Component $colors={colors} $isCompleted={todo.isCompleted}>
      <div>
        <Circle isCompleted={todo.isCompleted} todoId={todo.id} />
        <p className={`todo-task ${todo.isCompleted ? "completed" : ""}`}>
          {todo.task}
        </p>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          <img src={"./images/icon-cross.svg"} alt="cross" />
        </button>
      </div>
    </Component>
  );
}

export default Todo;
