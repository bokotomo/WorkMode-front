import { Dispatch } from 'redux';
import { requestUserCreate } from '@/websocket/request/user';

// ユーザ新規登録
export const userRegister = (
  dispatch: Dispatch,
  socket: WebSocket,
  name: string,
  email: string,
  password: string
) => {
  requestUserCreate(socket, name, email, password);
};

// ユーザ新規ゲスト登録
export const userRegisterGuest = (
  dispatch: Dispatch,
  socket: WebSocket,
  name: string
) => {
  requestUserGuestCreate(socket, name);
};

// サインイン
export const userSignin = (
  dispatch: Dispatch,
  socket: WebSocket,
  email: string,
  password: string
) => {};
