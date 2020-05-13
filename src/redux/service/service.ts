import { Dispatch } from 'redux';
import { TaskCard } from '@/types/taskBoard';
import { modalOpend } from '@/redux/service/modal';
import { userRegister } from '@/redux/service/user';
import { setWebsocket } from '@/redux/service/socket';
import {
  addTask,
  updateTaskStatus,
  deleteTask,
  updateTask,
} from '@/redux/service/task';

export const service = {
  modalOpend: (dispatch: Dispatch, openedModalName: string) =>
    modalOpend(dispatch, openedModalName),
  userRegister: (dispatch: Dispatch, socket: WebSocket, name: string) =>
    userRegister(dispatch, socket, name),
  userRegisterGuest: (dispatch: Dispatch, socket: WebSocket, name: string) =>
    userRegisterGuest(dispatch, socket, name),
  userSignin: (dispatch: Dispatch, socket: WebSocket, name: string) =>
    userSignin(dispatch, socket, name),
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
  updateTask: (dispatch: Dispatch, socket: WebSocket, task: TaskCard) =>
    updateTask(dispatch, socket, task),
};
