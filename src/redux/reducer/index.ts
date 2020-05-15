import { combineReducers } from 'redux';
import { ReducerAuth, StateAuth } from '@/redux/reducer/auth';
import { ReducerUser, StateUser } from '@/redux/reducer/user';
import { ReducerTask, StateTask } from '@/redux/reducer/task';
import { ReducerMessage, StateMessage } from '@/redux/reducer/message';
import { ReducerRoom, StateRoom } from '@/redux/reducer/room';
import { ReducerModal, StateModal } from '@/redux/reducer/modal';
import { ReducerWebSocket, StateWebSocket } from '@/redux/reducer/socket';

export type AppState = {
  readonly modal: StateModal;
  readonly auth: StateAuth;
  readonly user: StateUser;
  readonly task: StateTask;
  readonly message: StateMessage;
  readonly room: StateRoom;
  readonly webSocket: StateWebSocket;
};

export default combineReducers<AppState>({
  modal: ReducerModal,
  auth: ReducerAuth,
  user: ReducerUser,
  task: ReducerTask,
  message: ReducerMessage,
  room: ReducerRoom,
  webSocket: ReducerWebSocket,
});
