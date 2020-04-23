import { Dispatch } from 'redux';
import { Cookies } from 'react-cookie';
import { ActionAuth } from '@/redux/actions/auth';
import { ActionUser } from '@/redux/actions/user';

export const userCreated = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  const data = JSON.parse(message.data);
  const id = data.id as string;
  const name = data.name as string;
  const token = data.token as string;
  const isLogined = true;
  new Cookies().set('token', token, { path: '/' });
  dispatch(
    ActionAuth.setAuth({
      id,
      name,
      token,
      isLogined,
    })
  );
};

export const activeUserSearch = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  interface responseUser {
    id: string;
    name: string;
    color: string;
  }
  interface responseUsers {
    users: responseUser[];
  }
  const data: responseUsers = JSON.parse(message.data);
  const activeUsers = data.users.map(({ id, name, color }: responseUser) => {
    return {
      id,
      name,
      color,
    };
  });

  dispatch(ActionUser.setActiveUser(activeUsers));
};
