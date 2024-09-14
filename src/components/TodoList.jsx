import React, { useMemo } from "react";
import {
  FILTER_ACTIVE,
  FILTER_COMPLETED,
  useTodoStore,
} from "../store/TodoStore";
import Todo from "./Todo";
import TodosFilter from "./TodosFilter";
import { useTheme } from "../context/ThemeProvider";
import ClearCompleted from "./ClearCompleted";
import styled from "styled-components";

const Component = styled.div`
  width: 100%;
  margin: 28px 0;
  border-radius: 4px;
  box-shadow: 0 1px 6px 0 hsla(235, 24%, 19%, 0.493);
  background-color: ${({ $colors }) => $colors.backgroundMain};

  .controller-bar {
    display: grid;
    align-items: center;
    grid-template-areas: "filter filter" "left  right";
    gap: 21px;
    padding: 21px;
    font-size: 14px;
    p {
      color: ${({ $colors }) => $colors.colorGrayish};
      grid-area: left;
    }
    @media (min-width: 375px) {
      grid-template-areas: "left filter filter filter right";
    }
  }
`;

function TodoList() {
  const todoList = useTodoStore((state) => state.todoList);
  const filter = useTodoStore((state) => state.filter);
  const colors = useTheme();

  const filteredTodoList = useMemo(
    () =>
      todoList.filter((todo) => {
        switch (filter) {
          case FILTER_ACTIVE:
            return !todo.isCompleted;
          case FILTER_COMPLETED:
            return todo.isCompleted;
          default:
            return todo;
        }
      }),
    [filter, todoList]
  );

  const activeTodos = useMemo(
    () => todoList.filter((todo) => !todo.isCompleted),
    [todoList]
  );

  if (todoList.length === 0)
    return (
      <p className="no-todos" style={{ color: "#494C6B", margin: "28px 0" }}>
        No Todos...
      </p>
    );

  return (
    <Component $colors={colors}>
      <ul>
        {filteredTodoList.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
      <div className="controller-bar">
        <p>{activeTodos.length} items left</p>
        <TodosFilter />
        <ClearCompleted />
      </div>
    </Component>
  );
}

export default TodoList;
