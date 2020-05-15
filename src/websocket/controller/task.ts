import { Dispatch } from 'redux';
import { ResponseTaskCard } from '@/types/taskBoard';
import { ActionTask } from '@/redux/action/task';
import { adapterTask } from '@/websocket/adapter/task';

export const taskCreated = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  interface ResponseTaskCreated {
    taskTodos: ResponseTaskCard[];
  }
  const data: ResponseTaskCreated = JSON.parse(message.data);
  const taskTodos = data.taskTodos.map((item) => adapterTask(item));
  dispatch(ActionTask.setTodo(taskTodos));
};

export const taskIndex = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  interface ResponseTaskIndex {
    todoList: ResponseTaskCard[];
    inprogressList: ResponseTaskCard[];
    doneList: ResponseTaskCard[];
  }
  const data: ResponseTaskIndex = JSON.parse(message.data);
  const todoList = data.todoList.map((item) => adapterTask(item));
  const inprogressList = data.inprogressList.map((item) => adapterTask(item));
  const doneList = data.doneList.map((item) => adapterTask(item));
  dispatch(ActionTask.setTodo(todoList));
  dispatch(ActionTask.setInProgresses(inprogressList));
  dispatch(ActionTask.setDone(doneList));
};

export const taskUpdateStatus = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {};

export const taskDelete = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {};
