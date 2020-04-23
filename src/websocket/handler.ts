// WebSocketのハンドリング（APIで言うルーティング的立ち位置）
import { Dispatch } from 'redux';
import { Cookies } from 'react-cookie';
import { authentication } from '@/websocket/controller/authentication';
import { requestAuthentication } from '@/websocket/request/authentication';
import { userCreated, activeUserSearch } from '@/websocket/controller/user';
import { messageProgressIndex } from '@/websocket/controller/message';
import {
  taskCreated,
  taskIndex,
  taskUpdateStatus,
  taskDelete,
} from '@/websocket/controller/task';

// コネクション確立時
export const onOpen = (event: Event, socket: WebSocket, dispatch: Dispatch) => {
  const token = new Cookies().get('token') || '';
  requestAuthentication(socket, dispatch, token);
};

// メッセージ受取時
export const onMessage = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  const data = JSON.parse(message.data);
  console.log(data);
  switch (data.role) {
    case 'authentication':
      authentication(message, socket, dispatch);
      break;
    case 'user_create':
      userCreated(message, socket, dispatch);
      break;
    case 'task_create':
      taskCreated(message, socket, dispatch);
      break;
    case 'task_index':
      taskIndex(message, socket, dispatch);
      break;
    case 'task_update_status':
      taskUpdateStatus(message, socket, dispatch);
      break;
    case 'task_delete':
      taskDelete(message, socket, dispatch);
      break;
    case 'message_progress_index':
      messageProgressIndex(message, socket, dispatch);
      break;
    case 'active_user_search':
      activeUserSearch(message, socket, dispatch);
      break;
    default: {
      const output = `not found routing:  ${JSON.stringify(message.data)}`;
      throw new Error(output);
    }
  }
};
