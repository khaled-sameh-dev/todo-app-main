import styled from 'styled-components'
import {useTheme, useToggleTheme} from '../context/ThemeProvider'

const Component = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 28px 0;
  & .logo{
    font-size: 38px;
    letter-spacing: 12px;
    font-weight: 700;
  }
  & .toggle-icon{
    cursor: pointer;
  }
`


function Header() {
  const colors = useTheme()
  const toggleTheme = useToggleTheme()
  
  return (
    <Component className='header'>
        <p className='logo'>TODO</p>
        <button className='toggle-icon' onClick={toggleTheme}>
          <img src={colors.icon} alt="toggle-icon"  />
        </button>
    </Component>
  )
}

export default Header