import React from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux'

import Posts from "./components/Posts";
import {AddPostForm} from "./components/AddPostForm";
import {store} from "./redux/store";

import './App.css';

const App = () => (
    <Provider store={store}>
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
            <AddPostForm/>
            <hr/>
            <Posts/>
        </div>
    </Provider>
);

export default App;
