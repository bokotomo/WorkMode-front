import { Dispatch } from 'redux';
import { ActionTask } from '../redux/actions/task';
import { TaskCard } from '../types/taskBoard';
import { requestTaskCreate } from '../controller/task'
import { Cookies } from 'react-cookie';

export const addTask = (dispatch: Dispatch, socket: WebSocket, task: TaskCard) => {
    // dispatch(ActionTask.addTaskTodo(task));
    const token = new Cookies().get('token') || ''
    requestTaskCreate(socket, dispatch, token, task)
}