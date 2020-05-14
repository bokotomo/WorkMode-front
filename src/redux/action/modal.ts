import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionModal = {
  updateModalOpened: actionCreator<string>('MODAL_UPDATE_OPENED'),
};
