import { Dispatch } from 'redux';
import { ActionModal } from '@/redux/action/modal';

export const requestAuthentication = (
  socket: WebSocket,
  dispatch: Dispatch,
  token: string
) => {
  if (token === '') {
    dispatch(ActionModal.updateModalOpened('register'));
    return;
  }
  const action = 'sendmessage';
  const role = 'authentication';
  const data = {
    role,
    token,
  };
  socket.send(JSON.stringify({ action, data }));
};
