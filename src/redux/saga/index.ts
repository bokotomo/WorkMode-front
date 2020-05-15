import { all, fork } from 'redux-saga/effects';
import { watchUser } from '@/redux/saga/user';
import { watchTask } from '@/redux/saga/task';
import { watchAuth } from '@/redux/saga/auth';

export default function* root() {
  yield all([fork(watchTask), fork(watchUser), fork(watchAuth)]);
}
