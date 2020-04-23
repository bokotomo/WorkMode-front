// WebSocketのハンドリング
import { Dispatch } from 'redux';
import { Cookies } from 'react-cookie';
import {
  requestAuthentication,
  responseAuthentication,
} from '@/controller/authentication';
import {
  responseUserCreate,
  responseActiveUserSearch,
} from '@/controller/user';
import {
  responseTaskCreate,
  responseTaskIndex,
  responseTaskUpdateStatus,
  responseTaskDelete,
} from '@/controller/task';

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
      responseAuthentication(message, socket, dispatch);
      break;
    case 'user_create':
      responseUserCreate(message, socket, dispatch);
      break;
    case 'task_create':
      responseTaskCreate(message, socket, dispatch);
      break;
    case 'task_index':
      responseTaskIndex(message, socket, dispatch);
      break;
    case 'task_update_status':
      responseTaskUpdateStatus(message, socket, dispatch);
      break;
    case 'task_delete':
      responseTaskDelete(message, socket, dispatch);
      break;
    case 'active_user_search':
      responseActiveUserSearch(message, socket, dispatch);
      break;
    default: {
      const output = `not found routing:  ${JSON.stringify(message.data)}`;
      throw new Error(output);
    }
  }
};
