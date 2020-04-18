import { Dispatch } from 'redux';
import { ActionAuth } from '../redux/actions/auth';
import { Cookies } from 'react-cookie';

// ユーザ作成
export const requestUserCreate = (socket: WebSocket, name: string) => {
    const action = 'sendmessage'
    const role = 'user_create'
    const data = {
        role,
        name,
    }
    socket.send(JSON.stringify({ action, data }));
};

export const responseUserCreate = (message: MessageEvent, socket: WebSocket, dispatch: Dispatch) => {
    const data = JSON.parse(message.data)
    const id = data.id
    const name = data.name
    const token = data.token
    const isLogined = true
    new Cookies().set('token', token, { path: '/' });
    dispatch(ActionAuth.setAuth({
        id,
        name,
        token,
        isLogined,
    }))
}