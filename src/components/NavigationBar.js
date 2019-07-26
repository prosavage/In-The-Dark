import React, {Component} from 'react';
import {Moon} from 'react-feather';


class NavigationBar extends Component {
    render() {
        return (
            <div className={"navigation-bar-container"}>
               <Moon color={"white"} size={30}/>
               <h4>In The Dark Challenge</h4>
            </div>
        );
    }
}

export default NavigationBar;
