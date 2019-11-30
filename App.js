import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/home';
import MarkSheet from './components/marksheet';
import Salary from './components/salary';
import NoMatch from './components/no match';
import Nav from './components/nav';



class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />                
                    <Route path='/marksheet' component={MarkSheet} />                
                    <Route path='/salary' component={Salary} />                
                    <Route path='*' component={NoMatch} />                
                </Switch>
            </BrowserRouter>
        )
    }
}


export default App;