import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";
import ThemeProvider from "./context/ThemeProvider";
import styled from "styled-components";

const Component  = styled.div`
  margin: 2.5rem 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  @media(min-width: 375px){
    min-width: 375px;
    max-width: 520px;
    margin: 2.5rem auto;
  }
`

function App() {
  return (
    <Component>
      {/* theme provider to provide the colors and theme for all components in todo app */}
      <ThemeProvider>
        <Header />
        <InputBox />
        <TodoList />
      </ThemeProvider>
    </Component>
  );
}

export default App;
