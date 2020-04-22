import { Dispatch } from 'redux';
import { modalOpend } from './modal';
import { userRegister } from './user';
import { setWebsocket } from './socket';
import { addTask, updateTaskStatus, deleteTask } from './task';
import { TaskCard } from '../types/taskBoard';

export const service = {
  modalOpend: (dispatch: Dispatch, openedModalName: string) =>
    modalOpend(dispatch, openedModalName),
  userRegister: (dispatch: Dispatch, socket: WebSocket, name: string) =>
    userRegister(dispatch, socket, name),
  setWebsocket: (dispatch: Dispatch) => setWebsocket(dispatch),
  addTask: (dispatch: Dispatch, socket: WebSocket, task: TaskCard) =>
    addTask(dispatch, socket, task),
  updateTaskStatus: (
    dispatch: Dispatch,
    socket: WebSocket,
    taskId: string,
    status: string
  ) => updateTaskStatus(dispatch, socket, taskId, status),
  deleteTask: (dispatch: Dispatch, socket: WebSocket, taskId: string) =>
    deleteTask(dispatch, socket, taskId),
};
