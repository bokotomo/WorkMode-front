import { Dispatch } from 'redux';
import { Cookies } from 'react-cookie';
import { ActionAuth } from '../redux/actions/auth';
import { ActionUser } from '../redux/actions/user';

// ユーザ作成
export const requestUserCreate = (socket: WebSocket, name: string) => {
  const action = 'sendmessage';
  const role = 'user_create';
  const data = {
    role,
    name,
  };
  socket.send(JSON.stringify({ action, data }));
};

export const responseUserCreate = (
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

// ユーザ一覧取得
export const requestActiveUserSearch = (socket: WebSocket, token: string) => {
  const action = 'sendmessage';
  const role = 'active_user_search';
  const data = {
    role,
    token,
  };
  socket.send(JSON.stringify({ action, data }));
};

export const responseActiveUserSearch = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  const data = JSON.parse(message.data);
  interface responseUser {
    id: string;
    name: string;
    color: string;
  }
  const users = data.users as responseUser[];
  const activeUsers = users.map(({ id, name, color }: responseUser) => {
    return {
      id,
      name,
      color,
    };
  });

  dispatch(ActionUser.setActiveUser(activeUsers));
};
