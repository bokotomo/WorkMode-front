import { all, fork } from 'redux-saga/effects';
import { watchUser } from './user';
import { watchTask } from './task';
import { watchAuth } from './auth';

export default function* root() {
  yield all([fork(watchTask), fork(watchUser), fork(watchAuth)]);
}
