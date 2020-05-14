import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionWebSocket = {
  setWebSocket: actionCreator<WebSocket>('SET_WEBSOCKET'),
};
