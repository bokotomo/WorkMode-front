import { actionCreatorFactory } from '../../../node_modules/typescript-fsa';
import { ActiveUser } from '../../types/activeUser';

const actionCreator = actionCreatorFactory();

export const ActionUser = {
  setActiveUser: actionCreator<ActiveUser[]>('SET_ACTIVE_USER'),
};
