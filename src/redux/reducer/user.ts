import { reducerWithInitialState } from '../../../node_modules/typescript-fsa-reducers';
import { ActionUser } from '../actions/user';
import { ActiveUser } from '../../types/activeUser';

export interface StateUser {
    readonly activeUsers: ActiveUser[]
}

export const initialState: StateUser = {
    activeUsers: [],
}

export const ReducerUser = reducerWithInitialState(initialState)
    .case(ActionUser.setActiveUser, (state, activeUsers) => {
        return { ...state, activeUsers }
    })