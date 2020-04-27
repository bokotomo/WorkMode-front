import { Dispatch } from 'redux';
import { requestUserCreate } from '@/websocket/request/user';

export const userRegister = (
  dispatch: Dispatch,
  socket: WebSocket,
  name: string
) => {
  requestUserCreate(socket, name);
};
