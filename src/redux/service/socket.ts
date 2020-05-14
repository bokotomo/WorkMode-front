import { Dispatch } from 'redux';
import { onMessage, onOpen } from '@/websocket/handler';
import { ActionWebSocket } from '@/redux/action/socket';
import { endpoint } from '@/config';

export const setWebsocket = (dispatch: Dispatch) => {
  const socket = new WebSocket(endpoint);
  socket.onmessage = (message: MessageEvent) =>
    onMessage(message, socket, dispatch);
  socket.onopen = (event: Event) => onOpen(event, socket, dispatch);
  dispatch(ActionWebSocket.setWebSocket(socket));
};
