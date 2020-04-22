import { Dispatch } from 'redux';
import { ActionModal } from '../redux/actions/modal';

export const modalOpend = (dispatch: Dispatch, openedModalName: string) =>
  dispatch(ActionModal.updateModalOpened(openedModalName));
