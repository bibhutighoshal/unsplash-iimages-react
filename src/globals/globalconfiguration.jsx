import { React, useContext, createContext, useState } from 'react';

const AppContext = createContext();
export const GlobalContextProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [searchKey , setSearchKey] = useState('tree')

    document.querySelector('body').classList.toggle('dark-theme',isDarkTheme)
    const toggleDarkTheme = () => {
        const themeDark = !isDarkTheme;

    

        setIsDarkTheme(themeDark);
    }


    return <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme  ,searchKey , setSearchKey }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext) 