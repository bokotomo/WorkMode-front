import { Message } from '@/types/message';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionMessage = {
  setMessage: actionCreator<Message[]>('MESSAGE_SET'),
  addMessage: actionCreator<Message>('MESSAGE_ADD'),
  deleteMessages: actionCreator<string[]>('MESSAGE_DELETE'),
};
