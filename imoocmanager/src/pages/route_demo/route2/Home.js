import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

export default class Home extends React.Component{
    render(){
        return(
            <HashRouter>
                <div>  
                    <ul>
                        <li> 
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>about</Link>
                        </li>
                        <li>
                            <Link to='/topics'>topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    {this.props.children}
                </div>
            </HashRouter>
        )
    }
}