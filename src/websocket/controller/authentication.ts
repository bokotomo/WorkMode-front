import { Dispatch } from 'redux';
import { ActionModal } from '@/redux/actions/modal';

export const authentication = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  interface ResponseAuthentication {
    isLogined: Boolean;
  }
  const data: ResponseAuthentication = JSON.parse(message.data);
  if (!data.isLogined) dispatch(ActionModal.updateModalOpened('register'));
};
