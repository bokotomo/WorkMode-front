// WebSocketのハンドリング
import { Dispatch } from 'redux';
import { requestAuthentication, responseAuthentication } from '../controller/authentication'
import { responseUserCreate } from '../controller/user'
import { Cookies } from 'react-cookie';


// コネクション確立時
export const onOpen = (event: Event, socket: WebSocket, dispatch: Dispatch) => {
    const token = new Cookies().get('token') || ''
    requestAuthentication(socket, dispatch, token);
};

// メッセージ受取時
export const onMessage = (message: MessageEvent, socket: WebSocket, dispatch: Dispatch) => {
    const data = JSON.parse(message.data)
    switch (data.role) {
        case 'authentication':
            responseAuthentication(message, socket, dispatch);
            break;
        case 'user_create':
            responseUserCreate(message, socket, dispatch);
            break;
        default:
            throw new Error('not found routing: ' + message.data);
    }
};