import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Reducer, State } from './reducer'
import { ReducerAuth, StateAuth } from './reducer/auth'
import { ReducerUser, StateUser } from './reducer/user'
import thunk from "redux-thunk"

export type AppState = {
    state: State
    auth: StateAuth
    user: StateUser
}

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers<AppState>({
        state: Reducer,
        auth: ReducerAuth,
        user: ReducerUser,
    }),
    storeEnhancers(applyMiddleware(thunk))
)

export default store