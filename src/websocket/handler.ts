// WebSocketのハンドリング（APIで言うルーティング的立ち位置）
import { Dispatch } from 'redux';
import { Cookies } from 'react-cookie';
import { authentication } from '@/websocket/controller/authentication';
import { userCreated, activeUserSearch } from '@/websocket/controller/user';
import {
  messageProgressIndex,
  messageProgressFind,
  messageProgressDelete,
} from '@/websocket/controller/message';
import {
  taskCreated,
  taskIndex,
  taskUpdateStatus,
  taskDelete,
} from '@/websocket/controller/task';
import { ActionAuth } from '@/redux/action/auth';

// コネクション確立時
export const onOpen = (event: Event, socket: WebSocket, dispatch: Dispatch) => {
  const token = new Cookies().get('token') || '';
  dispatch(ActionAuth.requestAuthentication(token));
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
    case 'user_create_guest':
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
    case 'message_progress_added':
      messageProgressFind(message, socket, dispatch);
      break;
    case 'message_progress_deleted':
      messageProgressDelete(message, socket, dispatch);
      break;
    case 'active_user_search':
      activeUserSearch(message, socket, dispatch);
      break;
    default: {
      const output = `存在しないroleです:  ${JSON.stringify(message.data)}`;
      throw new Error(output);
    }
  }
};
