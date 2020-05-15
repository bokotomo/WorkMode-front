import { all, fork } from 'redux-saga/effects';
import { watchUser } from '@/redux/saga/user';
import { watchTask } from '@/redux/saga/task';
import { watchAuth } from '@/redux/saga/auth';
import { watchControllerTask } from '@/redux/saga/controller/task';
import { watchControllerAuthentication } from '@/redux/saga/controller/authentication';
import { watchControllerMessage } from '@/redux/saga/controller/message';
import { watchControllerUser } from '@/redux/saga/controller/user';

export default function* root() {
  yield all([
    fork(watchTask),
    fork(watchUser),
    fork(watchAuth),
    fork(watchControllerTask),
    fork(watchControllerAuthentication),
    fork(watchControllerMessage),
    fork(watchControllerUser),
  ]);
}
