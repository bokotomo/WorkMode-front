import { reducerWithInitialState } from '../../../node_modules/typescript-fsa-reducers';
import { ActionAuth } from '../actions/auth';

export interface StateAuth {
    id: string
    name: string
    token: string
    isLogined: boolean
}

export const initialStateAuth: StateAuth = {
    id: '',
    name: '',
    token: '',
    isLogined: false,
}

export const ReducerAuth = reducerWithInitialState(initialStateAuth)
    .case(ActionAuth.setAuth, (state, reducerAuthUser) => {
        return {
            ...state,
            id: reducerAuthUser.id,
            name: reducerAuthUser.name,
            token: reducerAuthUser.token,
            isLogined: reducerAuthUser.isLogined,
        }
    })