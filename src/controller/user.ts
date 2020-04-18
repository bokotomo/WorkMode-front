import { Dispatch } from 'redux';
import { AreducerAuthUser } from '../types/reducer_auth';

// ユーザ作成
export const requestUserCreate = (socket: WebSocket, user: AreducerAuthUser) => {
    const action = 'sendmessage'
    const role = 'user_create'
    const data = {
        role,
        user,
    }
    socket.send(JSON.stringify({ action, data }));
};