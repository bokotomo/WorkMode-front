import { put, takeEvery } from 'redux-saga/effects';
import { ActionController } from '@/redux/action/controller';
import { ActionTask } from '@/redux/action/task';
import { ResponseTaskCard } from '@/types/taskBoard';
import { adapterTask } from '@/redux/saga/adapter/task';

export function* watchControllerTask() {
  yield takeEvery(ActionController.taskCreate, create);
  yield takeEvery(ActionController.taskIndex, index);
  yield takeEvery(ActionController.taskUpdateStatus, updateStatus);
  yield takeEvery(ActionController.taskDelete, deleteTask);
}

function* create(action: { type: string; payload: MessageEvent }) {
  interface ResponseTaskCreated {
    taskTodos: ResponseTaskCard[];
  }
  const data: ResponseTaskCreated = JSON.parse(action.payload.data);
  const taskTodos = data.taskTodos.map((item) => adapterTask(item));
  yield put(ActionTask.setTodo(taskTodos));
}

function* index(action: { type: string; payload: MessageEvent }) {
  interface ResponseTaskIndex {
    todoList: ResponseTaskCard[];
    inprogressList: ResponseTaskCard[];
    doneList: ResponseTaskCard[];
  }
  const data: ResponseTaskIndex = JSON.parse(action.payload.data);
  const todoList = data.todoList.map((item) => adapterTask(item));
  const inprogressList = data.inprogressList.map((item) => adapterTask(item));
  const doneList = data.doneList.map((item) => adapterTask(item));
  yield put(ActionTask.setTodo(todoList));
  yield put(ActionTask.setInProgresses(inprogressList));
  yield put(ActionTask.setDone(doneList));
}

function* updateStatus(action: { type: string; payload: MessageEvent }) {
  yield;
}

function* deleteTask(action: { type: string; payload: MessageEvent }) {
  yield;
}
