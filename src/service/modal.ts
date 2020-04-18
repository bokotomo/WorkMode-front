import { Dispatch } from 'redux';
import { ActionModal } from '../redux/actions/modal';

export const serviceModalOpend = (
    dispatch: Dispatch,
    openedModalName: string,
) => dispatch(ActionModal.updateModalOpened(openedModalName));