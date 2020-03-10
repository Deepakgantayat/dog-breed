import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/users'
// import breedsReducer from '../reducers/dogbreed'
import detailReducer from '../reducers/details'


const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        // dogbreeds: breedsReducer,
        details: detailReducer,
       
    }), applyMiddleware(thunk))
    return store
}

export default configureStore