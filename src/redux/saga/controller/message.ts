import { put, takeEvery } from 'redux-saga/effects';
import { ActionController } from '@/redux/action/controller';
import { Message } from '@/types/message';
import { ActionMessage } from '@/redux/action/message';
import moment from 'moment';

export function* watchControllerMessage() {
  yield takeEvery(ActionController.messageIndex, index);
  yield takeEvery(ActionController.messageFind, find);
  yield takeEvery(ActionController.messageDelete, deleteMessage);
}

function* index(action: { type: string; payload: MessageEvent }) {
  interface ReponseMessage {
    readonly id: string;
    readonly userId: string;
    readonly userName: string;
    readonly userColor: string;
    readonly text: string;
    readonly status: string;
    readonly createdAt: string;
  }
  interface ResponseMessageProgress {
    messages: ReponseMessage[];
  }
  const data: ResponseMessageProgress = JSON.parse(action.payload.data);
  const domainMessages = data.messages.map((resMessage: ReponseMessage) => {
    return {
      id: resMessage.id,
      userId: resMessage.userId,
      userName: resMessage.userName,
      userColor: resMessage.userColor,
      text: resMessage.text,
      progress: 0,
      status: resMessage.status,
      createdAt: moment(resMessage.createdAt, 'YYYY/MM/DD HH:mm:ss').toDate(),
    } as Message;
  });

  yield put(ActionMessage.setMessage(domainMessages));
}

function* find(action: { type: string; payload: MessageEvent }) {
  interface ReponseMessage {
    readonly id: string;
    readonly userName: string;
    readonly userColor: string;
    readonly text: string;
    readonly status: string;
    readonly createdAt: string;
  }
  interface ResponseMessageProgress {
    message: ReponseMessage;
  }
  const data: ResponseMessageProgress = JSON.parse(action.payload.data);
  const resMessage = data.message as ReponseMessage;
  const domainMessage = {
    id: resMessage.id,
    userName: resMessage.userName,
    userColor: resMessage.userColor,
    text: resMessage.text,
    progress: 0,
    status: resMessage.status,
    createdAt: moment(resMessage.createdAt, 'YYYY/MM/DD HH:mm:ss').toDate(),
  } as Message;

  yield put(ActionMessage.addMessage(domainMessage));
}

function* deleteMessage(action: { type: string; payload: MessageEvent }) {
  interface ReponseMessage {
    readonly id: string;
  }
  interface ResponseMessageProgress {
    messages: ReponseMessage[];
  }
  const data: ResponseMessageProgress = JSON.parse(action.payload.data);
  const resMessages = data.messages as ReponseMessage[];
  const domainMessageIds = resMessages.map(({ id }) => id);

  yield put(ActionMessage.deleteMessages(domainMessageIds));
}
