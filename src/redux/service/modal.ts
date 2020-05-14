import { Dispatch } from 'redux';
import { ActionModal } from '@/redux/action/modal';

export const modalOpend = (dispatch: Dispatch, openedModalName: string) =>
  dispatch(ActionModal.updateModalOpened(openedModalName));
