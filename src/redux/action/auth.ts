import { ReducerAuthUser } from '@/types/reducer_auth';
import { User } from '@/types/user';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionAuth = {
  setAuth: actionCreator<ReducerAuthUser>('AUTH_SET'),

  requestAuthentication: actionCreator<string>('REQUEST_AUTHENTICATION'),
  requestUserRegister: actionCreator<User>('REQUEST_USER_REGISTER'),
  requestUserRegisterGuest: actionCreator<string>(
    'REQUEST_USER_REGISTER_GUEST'
  ),
  requestUserSignin: actionCreator<User>('REQUEST_USER_SIGNIN'),
};
