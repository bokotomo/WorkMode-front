import { reducerWithInitialState } from '../../../node_modules/typescript-fsa-reducers';
import { ActionAuth } from '../actions/auth';
import { Cookies } from 'react-cookie';

export interface StateAuth {
    id: string
    name: string
    token: string
}

export const initialState: StateAuth = {
    id: '',
    name: '',
    token: new Cookies().get('token') || '',
}

export const ReducerAuth = reducerWithInitialState(initialState)
    .case(ActionAuth.createUser, (state, name) => {
        const token = "token"
        new Cookies().set('token', token, { path: '/' });
        return {
            ...state,
            id: '1',
            name,
            token,
        }
    })