import React, { Component } from 'react';
import {themeCTX, ThemeCTX} from './App';

export default class ClassCTX extends Component {
    themeStyles(dark){
        return {
            backgroundColor: dark ? '#333' : '#CCC',
            color: dark ? '#CCC' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }

    render(){
        return(
            <ThemeCTX.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
                }}

            </ThemeCTX.Consumer>
        )
    }
}