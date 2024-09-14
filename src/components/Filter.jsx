import React from "react";
import { useTodoStore } from "../store/TodoStore";
import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";

const FilterButton = styled.button`
  font-size: 16px;
  color: ${({ $filter, $currentFilter, $colors }) =>
    $filter == $currentFilter ? "hsl(220, 98%, 61%)" : $colors.colorGrayish};
  cursor: pointer;
  &:hover{
    color: ${({ $filter, $currentFilter, $colors }) =>
    $filter == $currentFilter ? "hsl(220, 98%, 61%)" : $colors.colorMain};
  }
`;
function Filter({ children, filter }) {
  const setFilter = useTodoStore((state) => state.setFilter);
  const currentFilter = useTodoStore((state) => state.filter);
  const colors = useTheme();

  return (
    <FilterButton
      onClick={() => setFilter(filter)}
      $colors={colors}
      $filter={filter}
      $currentFilter={currentFilter}
    >
      {children}
    </FilterButton>
  );
}

export default Filter;
