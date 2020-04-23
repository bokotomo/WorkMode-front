import { Dispatch } from 'redux';
import { Cookies } from 'react-cookie';
import { ActionAuth } from '@/redux/actions/auth';
import { ActionUser } from '@/redux/actions/user';

export const userCreated = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  interface ResponseUserCreated {
    id: string;
    name: string;
    token: string;
  }
  const data: ResponseUserCreated = JSON.parse(message.data);
  const isLogined = true;
  new Cookies().set('token', data.token, { path: '/' });
  dispatch(
    ActionAuth.setAuth({
      id: data.id,
      name: data.name,
      token: data.token,
      isLogined,
    })
  );
};

export const activeUserSearch = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  interface ResponseUser {
    id: string;
    name: string;
    color: string;
  }
  interface ResponseUsers {
    users: ResponseUser[];
  }
  const data: ResponseUsers = JSON.parse(message.data);
  const activeUsers = data.users.map(({ id, name, color }: ResponseUser) => {
    return {
      id,
      name,
      color,
    };
  });

  dispatch(ActionUser.setActiveUser(activeUsers));
};
