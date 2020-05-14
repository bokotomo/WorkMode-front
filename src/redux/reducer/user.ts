import { ActionUser } from '@/redux/action/user';
import { ActiveUser } from '@/types/activeUser';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface StateUser {
  readonly activeUsers: ActiveUser[];
}

export const initialState: StateUser = {
  activeUsers: [],
};

export const ReducerUser = reducerWithInitialState(initialState).case(
  ActionUser.setActiveUser,
  (state, activeUsers) => {
    return { ...state, activeUsers };
  }
);
