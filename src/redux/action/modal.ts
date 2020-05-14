import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionModal = {
  updateModalOpened: actionCreator<string>('ACTION_UPDATE_MODAL_OPENED'),
};
