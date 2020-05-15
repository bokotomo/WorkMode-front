import { put, takeEvery } from 'redux-saga/effects';
import { ActionController } from '@/redux/action/controller';
import { Cookies } from 'react-cookie';
import { ActionAuth } from '@/redux/action/auth';
import { ActionUser } from '@/redux/action/user';

export function* watchControllerUser() {
  yield takeEvery(ActionController.userCreate, create);
  yield takeEvery(ActionController.activeUserSearch, activeUserSearch);
}

function* create(action: { type: string; payload: MessageEvent }) {
  interface ResponseUserCreated {
    id: string;
    name: string;
    token: string;
  }
  const data: ResponseUserCreated = JSON.parse(action.payload.data);
  const isLogined = true;
  new Cookies().set('token', data.token, { path: '/' });
  yield put(
    ActionAuth.setAuth({
      id: data.id,
      name: data.name,
      token: data.token,
      isLogined,
    })
  );
}

function* activeUserSearch(action: { type: string; payload: MessageEvent }) {
  interface ResponseUser {
    id: string;
    name: string;
    color: string;
  }
  interface ResponseUsers {
    users: ResponseUser[];
  }
  const data: ResponseUsers = JSON.parse(action.payload.data);
  const activeUsers = data.users.map(({ id, name, color }: ResponseUser) => {
    return {
      id,
      name,
      color,
    };
  });

  yield put(ActionUser.setActiveUser(activeUsers));
}
