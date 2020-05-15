import { ActionAuth } from '@/redux/action/auth';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Cookies } from 'react-cookie';

export interface StateAuth {
  readonly id: string;
  readonly name: string;
  readonly token: string;
  readonly isLogined: boolean;
}

export const initialStateAuth: StateAuth = {
  id: '',
  name: '',
  token: new Cookies().get('token') || '',
  isLogined: false,
};

export const ReducerAuth = reducerWithInitialState(initialStateAuth).case(
  ActionAuth.setAuth,
  (state, user) => {
    return {
      ...state,
      id: user.id,
      name: user.name,
      token: user.token,
      isLogined: user.isLogined,
    };
  }
);
