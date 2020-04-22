import { Dispatch } from 'redux';
import { requestUserCreate } from '../controller/user';

export const userRegister = (
  dispatch: Dispatch,
  socket: WebSocket,
  name: string
) => {
  requestUserCreate(socket, name);
};
