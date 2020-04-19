import { Dispatch } from 'redux';
import { ActionModal } from '../redux/actions/modal';

export const requestAuthentication = (socket: WebSocket, dispatch: Dispatch, token: string) => {
    if (token === '') {
        dispatch(ActionModal.updateModalOpened('register'))
        return;
    }
    const action = 'sendmessage'
    const role = 'authentication'
    const data = {
        role,
        token
    }
    socket.send(JSON.stringify({ action, data }));
};

export const responseAuthentication = (message: MessageEvent, socket: WebSocket, dispatch: Dispatch) => {
    const data = JSON.parse(message.data);
    const isLogined = data.isLogined;
    if (!isLogined) dispatch(ActionModal.updateModalOpened('register'));
};
