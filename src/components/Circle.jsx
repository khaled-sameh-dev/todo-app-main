import { useTodoStore } from "../store/TodoStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeProvider";
import styled from "styled-components";

const CircleComponent = styled.button`
  position: absolute;
  left: 20px;top: 21px;
  width: 23px;height:23px;
  border-radius: 50%;
  background-color: ${({$colors}) => $colors.colorVeryGrayish};
  cursor: pointer;
  background-image: ${({$isActive , $isCompleted}) => {
    if($isActive || $isCompleted )
      return 'linear-gradient(hsl(192, 100%, 67%) , hsl(280, 87%, 65%));'
  }};
  &:hover{
    background-image: linear-gradient(hsl(192, 100%, 67%) , hsl(280, 87%, 65%));
  }
  & span{
    width: 90%;height: 90%;
    border-radius: 50%;
    background-color: ${({$colors}) => $colors.backgroundMain};
    position: absolute;
    top:0;left:0;
    transform: translate(6% , 6%);
    opacity: ${({$isActive , $isCompleted}) => $isActive || $isCompleted ? '0' : '1'} 
  }
  & svg{
    color: ${({$colors}) => $colors.colorMain};
    font-size: 14px;
    font-weight: bold;
    opacity: ${({$isActive}) => $isActive ? '0' : '1'};
  }
`

function Circle({ isCompleted, todoId, isActive }) {
  const toggleTodoStatus = useTodoStore((state) => state.toggleTodoStatus);
  const colors = useTheme();

  return (
    <CircleComponent
      $colors={colors}
      $isActive={isActive}
      $isCompleted={isCompleted}
      onClick={() => toggleTodoStatus(todoId)}
    >
      <FontAwesomeIcon icon={faCheck} className="check-icon"/>
      <span></span>
    </CircleComponent>
  );
}

export default Circle;
