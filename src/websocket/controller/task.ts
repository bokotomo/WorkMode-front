import { Dispatch } from 'redux';
import { TaskCard } from '@/types/taskBoard';
import { ActionTask } from '@/redux/actions/task';

export const taskCreated = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  const data = JSON.parse(message.data);
  dispatch(ActionTask.setTaskTodo(data.taskTodos));
};

export const taskIndex = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  const data = JSON.parse(message.data);
  dispatch(ActionTask.setTaskTodo(data.todoList as TaskCard[]));
  dispatch(ActionTask.setTaskInProgresses(data.inprogressList as TaskCard[]));
  dispatch(ActionTask.setTaskDone(data.doneList as TaskCard[]));
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
