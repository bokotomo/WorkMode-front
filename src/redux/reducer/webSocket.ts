import { reducerWithInitialState } from '../../../node_modules/typescript-fsa-reducers';
import { ActionWebSocket } from '../actions/webSocket';

export interface StateWebSocket {
    readonly socket: WebSocket
}

export const initialStateWebSocket: StateWebSocket = {
    socket: {} as WebSocket,
}

export const ReducerWebSocket = reducerWithInitialState(initialStateWebSocket)
    .case(ActionWebSocket.setWebSocket, (state, socket) => {
        return { ...state, socket }
    })