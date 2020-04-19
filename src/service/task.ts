import { Dispatch } from 'redux';
import { TaskCard } from '../types/taskBoard';
import { requestTaskCreate, requestTaskUpdateStatus } from '../controller/task'
import { Cookies } from 'react-cookie';

export const addTask = (dispatch: Dispatch, socket: WebSocket, task: TaskCard) => {
    const token = new Cookies().get('token') || ''
    requestTaskCreate(socket, dispatch, token, task)
}

export const updateTaskStatus = (dispatch: Dispatch, socket: WebSocket, taskId: string, status: string) => {
    const token = new Cookies().get('token') || ''
    requestTaskUpdateStatus(socket, dispatch, token, taskId, status)
}
