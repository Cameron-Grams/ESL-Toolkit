import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Main from './containers/Main/Main'
import InputPage from './containers/InputText/InputPage'
import OutputPage from './containers/OutputPage/OutputPage'
import ClozeMaker from './containers/ClozeMaker/ClozeMaker'
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={ store } >
            <BrowserRouter > 
                <Switch>
                    <Route exact path={ "/" } component={ Main }  />
                    <Route exact path={ "/input/:type" } component={ InputPage } />             
                    <Route exact path={ "/build-cloze" } component={ ClozeMaker } />             
                    <Route exact path={ "/confirm-exercise" } component={ OutputPage } />             
                </Switch>            
            </BrowserRouter>
            </Provider>
        );
    }
} 

export default App;
