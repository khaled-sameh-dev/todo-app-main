import { createContext, useContext, useEffect, useMemo, useReducer } from "react"

const body = document.body
const darkTheme ={
    theme: 'dark',
    icon: './images/icon-sun.svg',
    backgroundImg: body.clientWidth <= 375 ? 'url("./images/bg-mobile-dark.jpg")' : 'url("./images/bg-desktop-dark.jpg")',
    backgroundApp: 'hsl(235, 21%, 11%)',
    backgroundMain: 'hsl(235, 24%, 19%)',
    colorMain: 'hsl(234, 39%, 85%)',
    colorMainHover: 'hsl(236, 33%, 92%)',
    colorGrayish: 'hsl(234, 11%, 52%)',
    colorVeryGrayish: 'hsl(233, 14%, 35%)',
}
const lightTheme ={
    theme: 'light',
    icon: './images/icon-moon.svg',
    backgroundImg: body.clientWidth <= 375 ? 'url("./images/bg-mobile-light.jpg")' : 'url("./images/bg-desktop-light.jpg")',
    backgroundApp: 'hsl(0, 0%, 98%)',
    backgroundMain: 'hsl(236, 33%, 92%)',
    colorMain: 'hsl(235, 19%, 35%)',
    colorGrayish: 'hsl(236, 9%, 61%)',
    colorVeryGrayish: ' hsl(233, 11%, 84%)'
}

const ThemeContext = createContext()
const ThemeToggleContext = createContext()

const reducer = (state , action)=> {
    switch(action.type){
        case 'THEME_TOGGLE':
            return state == 'dark' ? 'light' : 'dark' 
    }
}

function ThemeProvider({children}){
    const [theme , dispatch] = useReducer(reducer , 'dark')
    const colors = useMemo(()=> theme === 'dark' ? darkTheme: lightTheme , [theme])

    useEffect(()=>{
      body.style.backgroundColor = colors.backgroundApp
      body.style.backgroundImage = colors.backgroundImg
    } , [colors])

    return (
        <ThemeContext.Provider value={colors}>
            <ThemeToggleContext.Provider value={dispatch}>
                {children}
            </ThemeToggleContext.Provider>
        </ThemeContext.Provider>
    )
}

const useThemeDispatch = ()=> useContext(ThemeToggleContext)
export const useTheme = ()=> useContext(ThemeContext)
export const useToggleTheme = ()=>{
    const dispatch = useThemeDispatch()
    return ()=> dispatch({type: 'THEME_TOGGLE'})
  }

export default ThemeProvider