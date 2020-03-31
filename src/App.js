import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Posts} from "./components/Posts";

const App = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >Learn React
            </a>
        </header>
        <Posts/>
    </div>
);

export default App;
