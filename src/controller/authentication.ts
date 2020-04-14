import { Dispatch } from 'redux';
import { ActionAuth } from '../redux/actions/auth';
import { ActionModal } from '../redux/actions/modal';

export const requestAuthentication = (socket: WebSocket, token: string) => {
    const action = 'sendmessage'
    const type = 'authentication'
    const data = JSON.stringify({
        type,
        token
    })
    socket.send(JSON.stringify({ action, data }));
};

export const responseAuthentication = (message: MessageEvent, socket: WebSocket, dispatch: Dispatch) => {
    console.log(message);
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
