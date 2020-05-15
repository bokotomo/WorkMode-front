// WebSocketのハンドリング（APIで言うルーティング的立ち位置）
import { Dispatch } from 'redux';
import { Cookies } from 'react-cookie';
import { ActionAuth } from '@/redux/action/auth';
import { ActionController } from '@/redux/action/controller';

// コネクション確立時
export const onOpen = (event: Event, dispatch: Dispatch) => {
  const token = new Cookies().get('token') || '';
  dispatch(ActionAuth.requestAuthentication(token));
};

// メッセージ受取時
export const onMessage = (message: MessageEvent, dispatch: Dispatch) => {
  const data = JSON.parse(message.data);
  console.log(data);
  switch (data.role) {
    case 'authentication':
      dispatch(ActionController.authentication(message));
      break;
    case 'user_create_guest':
      dispatch(ActionController.userCreate(message));
      break;
    case 'task_create':
      dispatch(ActionController.taskCreate(message));
      break;
    case 'task_index':
      dispatch(ActionController.taskIndex(message));
      break;
    case 'task_update_status':
      dispatch(ActionController.taskUpdateStatus(message));
      break;
    case 'task_delete':
      dispatch(ActionController.taskDelete(message));
      break;
    case 'message_progress_index':
      dispatch(ActionController.messageIndex(message));
      break;
    case 'message_progress_added':
      dispatch(ActionController.messageFind(message));
      break;
    case 'message_progress_deleted':
      dispatch(ActionController.messageDelete(message));
      break;
    case 'active_user_search':
      dispatch(ActionController.activeUserSearch(message));
      break;
    default: {
      const output = `存在しないroleです:  ${JSON.stringify(message.data)}`;
      throw new Error(output);
    }
  }
};
