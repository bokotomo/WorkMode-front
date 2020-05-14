import { ReducerAuthUser } from '@/types/reducer_auth';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionAuth = {
  setAuth: actionCreator<ReducerAuthUser>('SET_AUTH'),
};
