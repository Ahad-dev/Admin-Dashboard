import {useContext,createContext} from 'react'

export const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: ()=>{}
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = ()=>{
    return useContext(ThemeContext);
}