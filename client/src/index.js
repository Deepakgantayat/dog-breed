import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App';

import 'bootstrap/dist/css/bootstrap.css'

import configureStore from './components/store/configureStore'

// import {startSetBreeds} from './components/actions/dogbreed'
import {startGetUser} from './components/actions/users'
import {startSetDetails} from './components/actions/details'


const store = configureStore()

console.log(store.getState())
store.subscribe(() => {
    console.log(store.getState())
})

//handle all page reloads, and also get the initial data from the server to store it in the redux store
if(localStorage.getItem('authToken')) {
    // store.dispatch(startSetCategories())
    // store.dispatch(startSetBreeds())
    store.dispatch(startGetUser())
    store.dispatch(startSetDetails())
}
const ele = (

    <Provider store = {store}>
        <App/>
    </Provider>

)

ReactDOM.render(ele, document.getElementById('root'));