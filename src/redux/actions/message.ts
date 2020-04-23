import { MessageProgress } from '@/types/messageProgress';
import { Message } from '@/types/message';
import { actionCreatorFactory } from '../../../node_modules/typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionMessage = {
  setMessage: actionCreator<Message[]>('SET_MESSAGE'),
  addMessage: actionCreator<MessageProgress>('ADD_MESSAGE'),
};
