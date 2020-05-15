import { ActiveUser } from '@/types/activeUser';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionUser = {
  setActiveUser: actionCreator<ActiveUser[]>('USER_SET_ACTIVE'),
};
