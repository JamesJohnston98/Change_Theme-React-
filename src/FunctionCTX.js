import React from 'react'
import { useTheme, useThemeUpdate} from './ThemeCTX';

export default function FunctionCTX() {
    const darkThm = useTheme();
    const changeTheme = useThemeUpdate();


    const themeStyles = {
        backgroundColor: darkThm ? '#333' : '#CCC',
        color: darkThm ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
        return (
            <>
            <button onClick={changeTheme}>Change</button>
            <div style={themeStyles}>
                Function Theme
            </div>
            </>
        )
    }

