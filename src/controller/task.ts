import { Dispatch } from 'redux';
import { TaskCard } from '../types/taskBoard';
import { ActionModal } from '../redux/actions/modal';

export const requestTaskCreate = (socket: WebSocket, dispatch: Dispatch, token: string, task: TaskCard) => {
    if (token === '') {
        dispatch(ActionModal.updateModalOpened('register'))
        return;
    }
    const action = 'sendmessage'
    const role = 'task_create'
    const data = {
        role,
        token,
        task
    }
    socket.send(JSON.stringify({ action, data }));
};

export const responseTaskCreate = (message: MessageEvent, socket: WebSocket, dispatch: Dispatch) => {
    const data = JSON.parse(message.data)

};
