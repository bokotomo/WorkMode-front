import { Dispatch } from 'redux';
import { ActionModal } from '../redux/actions/modal';

export const requestAuthentication = (socket: WebSocket, token: string) => {
    const action = 'sendmessage'
    const role = 'authentication'
    const data = {
        role,
        token
    }
    socket.send(JSON.stringify({ action, data }));
};

export const responseAuthentication = (message: MessageEvent, socket: WebSocket, dispatch: Dispatch) => {
    console.log(message.data);
    alert("KO");
    dispatch(ActionModal.updateModalOpened('register'))
    // authentication token
    // const id = '1'
    // const name = 'ttt'
    // const isLogined = token !== ''
    // dispatch(ActionAuth.setAuth({
    //     id,
    //     name,
    //     token,
    //     isLogined,
    // }))
    // if (!isLogined) {
    //     dispatch(ActionModal.updateModalOpened('register'))
    // }
};
