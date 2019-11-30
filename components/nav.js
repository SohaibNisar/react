import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import './nav.css';

class Nav extends Component{
    constructor(){
        super()
        this.state={
            toggle:true
        }
        if (window.innerWidth <= 764) {
            this.state.toggle=false;
        }
        
    }
    browserResize=()=>{
        if (window.innerWidth <= 764) {
            this.setState({toggle: false});
        }
        else{
            this.setState({toggle: true});
        }
    }
    toggle = () => {
        const currentState = this.state.toggle;
        this.setState({ toggle: !currentState });
    }

    render(){
        window.addEventListener('resize',this.browserResize)
        return(
            <ul> 
                <div className='collapse'>
                    <li id="logo">My Projects</li>

                    <div className={this.state.toggle ? 'nav-toggle change': 'nav-toggle'} onClick={this.toggle}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
                
                <ul className={!this.state.toggle ?  'hidden navbar' :'show navbar'}>
                    <li><NavLink exact activeClassName='nav active' to='/'>Home</NavLink></li>
                    <li><NavLink activeClassName='nav active' to='/contact'>Contact</NavLink></li>
                    <li><NavLink activeClassName='nav active' to='/salary'>Salary Sheet</NavLink></li>
                    <li><NavLink activeClassName='nav active' to='/marksheet'>Marksheet</NavLink></li>
                </ul>
            </ul>
        )
    }
}
export default Nav;