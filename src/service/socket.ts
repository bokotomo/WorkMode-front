import { Dispatch } from 'redux';
import { onMessage, onOpen } from '../handler/websocket';
import { ActionWebSocket } from '../redux/actions/socket';

export const setWebsocket = (dispatch: Dispatch) => {
    const endpoint = process.env.REACT_APP_API_ENDPOINT as string;
    const socket = new WebSocket(endpoint);
    socket.onmessage = (message: MessageEvent) => onMessage(message, socket, dispatch);
    socket.onopen = (event: Event) => onOpen(event, socket);
    dispatch(ActionWebSocket.setWebSocket(socket));
}