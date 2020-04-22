import { actionCreatorFactory } from '../../../node_modules/typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionModal = {
  updateModalOpened: actionCreator<string>('ACTION_UPDATE_MODAL_OPENED'),
};
