import { Dispatch } from 'redux';
import { Message } from '@/types/message';
import { ActionMessage } from '@/redux/action/message';
import moment from 'moment';

export const messageProgressIndex = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
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
  const data: ResponseMessageProgress = JSON.parse(message.data);
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

  dispatch(ActionMessage.setMessage(domainMessages));
};

export const messageProgressFind = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
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
  const data: ResponseMessageProgress = JSON.parse(message.data);
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

  dispatch(ActionMessage.addMessage(domainMessage));
};

export const messageProgressDelete = (
  message: MessageEvent,
  socket: WebSocket,
  dispatch: Dispatch
) => {
  interface ReponseMessage {
    readonly id: string;
  }
  interface ResponseMessageProgress {
    messages: ReponseMessage[];
  }
  const data: ResponseMessageProgress = JSON.parse(message.data);
  const resMessages = data.messages as ReponseMessage[];
  const domainMessageIds = resMessages.map(({ id }) => id);

  dispatch(ActionMessage.deleteMessages(domainMessageIds));
};
