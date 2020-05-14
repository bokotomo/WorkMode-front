import { takeEvery, select } from 'redux-saga/effects';
import { ActionAuth } from '@/redux/action/auth';
import { User } from '@/types/user';

export function* watchUser() {
  yield takeEvery(ActionAuth.requestUserRegister, register);
  yield takeEvery(ActionAuth.requestUserRegisterGuest, registerGuest);
  yield takeEvery(ActionAuth.requestUserSignin, signin);
}

// ユーザ新規登録
function* register(action: { type: string; payload: User }) {
  const user = action.payload;
  const role = 'user_create';
  const data = {
    role,
    email: user.email,
    name: user.name,
    password: user.password,
  };
  const socket = yield select((state) => state.webSocket.socket);
  socket.send(JSON.stringify({ action: 'sendmessage', data }));
}

// ユーザ新規ゲスト登録
function* registerGuest(action: { type: string; payload: string }) {
  const name = action.payload;
  const role = 'user_create_guest';
  const data = {
    role,
    name,
  };
  const socket = yield select((state) => state.webSocket.socket);
  socket.send(JSON.stringify({ action: 'sendmessage', data }));
}

// サインイン
function* signin(action: { type: string; payload: User }) {
  const user = action.payload;
  const role = 'user_signin';
  const data = {
    role,
    email: user.email,
    password: user.password,
  };
  const socket = yield select((state) => state.webSocket.socket);
  socket.send(JSON.stringify({ action: 'sendmessage', data }));
}
