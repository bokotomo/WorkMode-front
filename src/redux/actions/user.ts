import { ActiveUser } from '@/types/activeUser';
import { actionCreatorFactory } from '../../../node_modules/typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionUser = {
  setActiveUser: actionCreator<ActiveUser[]>('SET_ACTIVE_USER'),
};
