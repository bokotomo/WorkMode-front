import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { ReducerAuth, StateAuth } from './reducer/auth'
import { ReducerUser, StateUser } from './reducer/user'
import { ReducerTask, StateTask } from './reducer/task'
import { ReducerMessage, StateMessage } from './reducer/message'
import { ReducerRoom, StateRoom } from './reducer/room'
import { ReducerModal, StateModal } from './reducer/modal'
import thunk from 'redux-thunk'

export type AppState = {
    modal: StateModal
    auth: StateAuth
    user: StateUser
    task: StateTask
    message: StateMessage
    room: StateRoom
}

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers<AppState>({
        modal: ReducerModal,
        auth: ReducerAuth,
        user: ReducerUser,
        task: ReducerTask,
        message: ReducerMessage,
        room: ReducerRoom,
    }),
    storeEnhancers(applyMiddleware(thunk))
)

export default store