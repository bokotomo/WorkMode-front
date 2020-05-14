import { Cookies } from 'react-cookie';
import { put, takeEvery, select } from 'redux-saga/effects';
import { ActionTask } from '@/redux/action/task';
import { ActionModal } from '@/redux/action/modal';
import { TaskCard } from '@/types/taskBoard';

export function* watchTask() {
  yield takeEvery(ActionTask.requestTaskCreate, create);
  yield takeEvery(ActionTask.requestTaskDelete, deleteTask);
  yield takeEvery(ActionTask.requestTaskUpdate, update);
  yield takeEvery(ActionTask.requestTaskUpdateStatus, updateStatus);
}

function* create(action: { type: string; payload: TaskCard }) {
  const task = action.payload;
  const token = new Cookies().get('token') || '';
  if (token === '') {
    yield put(ActionModal.updateModalOpened('register'));
    return;
  }
  const role = 'task_create';
  const data = {
    role,
    token,
    task,
  };
  const socket = yield select((state) => state.webSocket.socket);
  socket.send(JSON.stringify({ action: 'sendmessage', data }));
}

function* deleteTask(action: { type: string; payload: string }) {
  const taskId = action.payload;
  const token = new Cookies().get('token') || '';
  if (token === '') {
    yield put(ActionModal.updateModalOpened('register'));
    return;
  }
  const role = 'task_delete';
  const data = {
    role,
    token,
    taskId,
  };
  const socket = yield select((state) => state.webSocket.socket);
  socket.send(JSON.stringify({ action: 'sendmessage', data }));
  yield put(ActionTask.deleteTask(taskId));
}

function* update(action: { type: string; payload: TaskCard }) {
  const task = action.payload;
  const token = new Cookies().get('token') || '';
  if (token === '') {
    yield put(ActionModal.updateModalOpened('register'));
    return;
  }
  const role = 'task_update';
  const data = {
    role,
    token,
    task,
  };
  const socket = yield select((state) => state.webSocket.socket);
  socket.send(JSON.stringify({ action: 'sendmessage', data }));
  yield put(ActionTask.updateTask(task));
}

function* updateStatus(action: { type: string; payload: TaskCard }) {
  const task = action.payload;
  const token = new Cookies().get('token') || '';
  if (token === '') {
    yield put(ActionModal.updateModalOpened('register'));
    return;
  }
  const role = 'task_update_status';
  const data = {
    role,
    token,
    taskId: task.id,
    status: task.status,
  };
  const socket = yield select((state) => state.webSocket.socket);
  socket.send(JSON.stringify({ action: 'sendmessage', data }));
}