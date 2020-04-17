// WebSocketのハンドリング
import { Dispatch } from 'redux';
import { requestAuthentication, responseAuthentication } from '../controller/authentication'
import { Cookies } from 'react-cookie';

// コネクション確立時
export const onOpen = (event: Event, socket: WebSocket) => {
    const token = new Cookies().get('token') || ''
    if (token === '') return;
    requestAuthentication(socket, token);
};

// メッセージ受取時
export const onMessage = (message: MessageEvent, socket: WebSocket, dispatch: Dispatch) => {
    switch (message.data.role) {
        case 'authentication':
            alert("authentication")
            break;
        default:
            throw new Error('not found routing');
    }
    if (true) {
        console.log(message.data.role)
        responseAuthentication(message, socket, dispatch);
    }
};