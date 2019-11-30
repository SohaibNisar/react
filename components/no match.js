import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {useLocation} from 'react-router-dom';
import './no match.css';
    
function NoMatch() {
    let location = useLocation();
    return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>4<span>0</span>4</h1>
                    </div>
                    <h2>The page you requested could not found</h2>
                    <h2>No match for <code>{location.pathname}</code></h2>
                </div>
            </div>
        )
    
}

export default NoMatch;