import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from  'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const initialState = {
    count:0
}

function reducer(state = initialState,action){
    switch(action.type){
        case "INCREMENT":
            return{
                count : state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default:
            return state
    }
    return state
    return state
}



const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter></Provider>, document.getElementById('root'));


registerServiceWorker();
