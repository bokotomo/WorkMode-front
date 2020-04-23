import { Dispatch } from 'redux';
import { Message } from '@/types/message';
import { ActionMessage } from '@/redux/actions/message';
import moment from 'moment';

export const messageProgressIndex = (
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
    messages: ReponseMessage[];
  }
  const data: ResponseMessageProgress = JSON.parse(message.data);
  const domainMessages = data.messages.map((resMessage: ReponseMessage) => {
    return {
      id: resMessage.id,
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
