import { ActionAuth } from '@/redux/actions/auth';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface StateAuth {
  readonly id: string;
  readonly name: string;
  readonly token: string;
  readonly isLogined: boolean;
}

export const initialStateAuth: StateAuth = {
  id: '',
  name: '',
  token: '',
  isLogined: false,
};

export const ReducerAuth = reducerWithInitialState(initialStateAuth).case(
  ActionAuth.setAuth,
  (state, reducerAuthUser) => {
    return {
      ...state,
      id: reducerAuthUser.id,
      name: reducerAuthUser.name,
      token: reducerAuthUser.token,
      isLogined: reducerAuthUser.isLogined,
    };
  }
);
