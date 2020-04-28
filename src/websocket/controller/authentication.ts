import { Dispatch } from 'redux';
import { Cookies } from 'react-cookie';
import { ActionModal } from '@/redux/actions/modal';
import { ActionAuth } from '@/redux/actions/auth';

export const authentication = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  interface ResponseAuthentication {
    isLogined: Boolean;
    id: string;
  }
  const data: ResponseAuthentication = JSON.parse(message.data);
  if (!data.isLogined) dispatch(ActionModal.updateModalOpened('register'));

  const token = new Cookies().get('token') || '';
  dispatch(
    ActionAuth.setAuth({
      id: data.id,
      name: '',
      token,
      isLogined: true,
    })
  );
};
