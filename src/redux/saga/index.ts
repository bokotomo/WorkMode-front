import { all, fork } from 'redux-saga/effects';
// import { watchUser } from './user';
import { watchTask } from './task';

export default function* root() {
  yield all([fork(watchTask)]);
  yield;
}
