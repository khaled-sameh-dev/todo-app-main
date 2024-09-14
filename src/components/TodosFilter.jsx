import Filter from "./Filter";
import { FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETED } from "../store/TodoStore";
import styled from "styled-components";

const Component = styled.ul`
  grid-area: filter;
  text-align: center;
  li{
    display: inline-block;
    margin: 0 8px;
  }
`

function TodosFilter() {
  return (
    <Component >
      <li>
        <Filter filter={FILTER_ALL}>All</Filter>
      </li>
      <li>
        <Filter filter={FILTER_ACTIVE}>Active</Filter>
      </li>
      <li>
        <Filter filter={FILTER_COMPLETED}>Completed</Filter>
      </li>
    </Component>
  );
}

export default TodosFilter;
