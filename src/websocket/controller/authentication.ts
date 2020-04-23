import { Dispatch } from 'redux';
import { ActionModal } from '@/redux/actions/modal';

export const authentication = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  const data = JSON.parse(message.data);
  const isLogined = data.isLogined as boolean;
  if (!isLogined) dispatch(ActionModal.updateModalOpened('register'));
};
