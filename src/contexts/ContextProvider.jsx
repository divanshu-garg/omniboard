import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = (({children})=> {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')

    // used to close or open the theme settings window in website
    const [showThemeSettings, setShowThemeSettings] = useState(false);

    const setMode= (e)=>{
        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode', e.target.value)
    }
    const setColor= (e)=>{
        // console.log("event:", e);
        setCurrentColor(e)
        localStorage.setItem('colorMode', e)
        setShowThemeSettings(false)
    }

    // when someone clicks an icon on Navbar I'll use handleClick to open that part of navbar
    const handleClick = (clicked)=> {
    setIsClicked({...initialState, ...clicked})
  }

  const [screenSize, setScreenSize] = useState(undefined);
    return <StateContext.Provider
    value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, setColor, setMode, currentColor, currentMode, showThemeSettings, setShowThemeSettings}}
    >
        {children}
    </StateContext.Provider>
})

export const useStateContext = ()=> useContext(StateContext);