import { createGlobalStyle } from "styled-components"
export const lightTheme ={
    body: '#fff',
    fontColor:'#0e0d0d',

}
export const darkTheme ={
    body: '#0e0d0d',
    fontColor:'#fff',

}

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.body}
    }
`