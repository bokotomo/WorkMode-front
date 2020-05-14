import { takeEvery, select, put } from 'redux-saga/effects';
import { ActionAuth } from '@/redux/action/auth';
import { ActionModal } from '@/redux/action/modal';

export function* watchAuth() {
  yield takeEvery(ActionAuth.requestAuthentication, authentication);
}

function* authentication(action: { type: string; payload: string }) {
  const token = action.payload;
  const role = 'authentication';
  const data = {
    role,
    token,
  };
  if (token === '') {
    yield put(ActionModal.updateModalOpened('register'));
    return;
  }
  const socket = yield select((state) => state.webSocket.socket);
  socket.send(JSON.stringify({ action: 'sendmessage', data }));
}
