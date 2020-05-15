import { put, takeEvery } from 'redux-saga/effects';
import { ActionController } from '@/redux/action/controller';
import { Cookies } from 'react-cookie';
import { ActionModal } from '@/redux/action/modal';
import { ActionAuth } from '@/redux/action/auth';

export function* watchControllerAuthentication() {
  yield takeEvery(ActionController.authentication, authentication);
}

function* authentication(action: { type: string; payload: MessageEvent }) {
  const data: {
    isLogined: Boolean;
    id: string;
  } = JSON.parse(action.payload.data);
  if (!data.isLogined) yield put(ActionModal.updateModalOpened('register'));

  const token = new Cookies().get('token') || '';
  yield put(
    ActionAuth.setAuth({
      id: data.id,
      name: '',
      token,
      isLogined: true,
    })
  );
}
