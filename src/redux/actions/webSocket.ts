import { actionCreatorFactory } from '../../../node_modules/typescript-fsa';

const actionCreator = actionCreatorFactory()

export const ActionWebSocket = {
    setWebSocket: actionCreator<WebSocket>('SET_WEBSOCKET'),
}