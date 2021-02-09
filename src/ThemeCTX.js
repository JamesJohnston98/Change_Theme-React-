 
 import React, { useContext, useState } from  'react';


const ThemeCTX = React.createContext();
const ThemeUpdateCTX = React.createContext();

export function useTheme(){
    return useContext(ThemeCTX);
}
 
export function useThemeUpdate(){
    return useContext(ThemeUpdateCTX);
}

 export function ThemeProvider({ children }){
    const [darkThm, setDark] = useState(true);

    function changeTheme(){
      setDark(prevdarkTheme => !prevdarkTheme);
    }

    return (
        <ThemeCTX.Provider value={darkThm}>
            <ThemeUpdateCTX.Provider value = {changeTheme}>
            {children}
            </ThemeUpdateCTX.Provider>
        </ThemeCTX.Provider>
    )
  }