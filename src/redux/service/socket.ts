import { Dispatch } from 'redux';
import { onMessage, onOpen } from '@/websocket/handler';
import { ActionWebSocket } from '@/redux/action/socket';

export const setWebsocket = (dispatch: Dispatch) => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT as string;
  const socket = new WebSocket(endpoint);
  socket.onmessage = (message: MessageEvent) =>
    onMessage(message, socket, dispatch);
  socket.onopen = (event: Event) => onOpen(event, socket, dispatch);
  dispatch(ActionWebSocket.setWebSocket(socket));
};
