import { createContext,useContext,useState,useEffect } from "react";

export  const AppContext = createContext()

export const AppProvider = ({children})=>{
   
    const [isDarkTheme,setIsDarkTheme] = useState(false)

    const toggleDarkTheme = ()=>{
        const drakTheme = !isDarkTheme
        setIsDarkTheme(drakTheme)
        const body = document.querySelector("body")
        body.classList.toggle("darkTheme")
        
    }

    return(
        <AppContext.Provider value={{isDarkTheme,toggleDarkTheme}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=> useContext(AppContext)