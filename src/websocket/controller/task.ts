import { Dispatch } from 'redux';
import { TaskCard } from '@/types/taskBoard';
import { ActionTask } from '@/redux/actions/task';

export const taskCreated = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  const data: {
    taskTodos: TaskCard[];
  } = JSON.parse(message.data);
  dispatch(ActionTask.setTaskTodo(data.taskTodos));
};

export const taskIndex = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  const data: {
    todoList: TaskCard[];
    inprogressList: TaskCard[];
    doneList: TaskCard[];
  } = JSON.parse(message.data);
  dispatch(ActionTask.setTaskTodo(data.todoList));
  dispatch(ActionTask.setTaskInProgresses(data.inprogressList));
  dispatch(ActionTask.setTaskDone(data.doneList));
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
