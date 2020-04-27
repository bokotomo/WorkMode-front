import { Dispatch } from 'redux';
import { Cookies } from 'react-cookie';
import { TaskCard } from '@/types/taskBoard';
import {
  requestTaskCreate,
  requestTaskUpdateStatus,
  requestTaskDelete,
  requestTaskUpdate,
} from '@/websocket/request/task';

export const addTask = (
  dispatch: Dispatch,
  socket: WebSocket,
  task: TaskCard
) => {
  const token = new Cookies().get('token') || '';
  requestTaskCreate(socket, dispatch, token, task);
};

export const updateTaskStatus = (
  dispatch: Dispatch,
  socket: WebSocket,
  taskId: string,
  status: string
) => {
  const token = new Cookies().get('token') || '';
  requestTaskUpdateStatus(socket, dispatch, token, taskId, status);
};

export const deleteTask = (
  dispatch: Dispatch,
  socket: WebSocket,
  taskId: string
) => {
  const token = new Cookies().get('token') || '';
  requestTaskDelete(socket, dispatch, token, taskId);
};

export const updateTask = (
  dispatch: Dispatch,
  socket: WebSocket,
  task: TaskCard
) => {
  const token = new Cookies().get('token') || '';
  requestTaskUpdate(socket, dispatch, token, task);
};
