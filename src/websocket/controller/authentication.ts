import { Dispatch } from 'redux';
import { Cookies } from 'react-cookie';
import { ActionModal } from '@/redux/action/modal';
import { ActionAuth } from '@/redux/action/auth';

export const authentication = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  const data: {
    isLogined: Boolean;
    id: string;
  } = JSON.parse(message.data);
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
