import { Message } from '@/types/message';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionMessage = {
  setMessage: actionCreator<Message[]>('SET_MESSAGE'),
  addMessage: actionCreator<Message>('ADD_MESSAGE'),
  deleteMessages: actionCreator<string[]>('DELETE_MESSAGE'),
};
