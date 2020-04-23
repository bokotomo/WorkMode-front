import { Dispatch } from 'redux';
import { ActionModal } from '@/redux/actions/modal';

export const authentication = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  const data: {
    isLogined: Boolean;
  } = JSON.parse(message.data);
  if (!data.isLogined) dispatch(ActionModal.updateModalOpened('register'));
};
