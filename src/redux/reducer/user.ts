import { reducerWithInitialState } from '../../../node_modules/typescript-fsa-reducers';
import { ActionUser } from '../actions/user';
import { ActiveUser } from '../../types/activeUser';
import { mockActiveUsers } from '../../mock/activeUsers';

export interface StateUser {
    activeUsers: ActiveUser[]
}

export const initialState: StateUser = {
    activeUsers: [],
}

export const ReducerUser = reducerWithInitialState(initialState)
    .case(ActionUser.setActiveUser, (state) => {
        const activeUsers = mockActiveUsers
        return { ...state, activeUsers }
    })