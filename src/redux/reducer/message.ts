import { ActionMessage } from '@/redux/actions/message';
import { Message } from '@/types/message';
import { reducerWithInitialState } from '../../../node_modules/typescript-fsa-reducers';

export interface StateMessage {
  readonly messages: Message[];
}

export const initialStateMessage: StateMessage = {
  messages: [],
};

export const ReducerMessage = reducerWithInitialState(initialStateMessage)
  .case(ActionMessage.setMessage, (state, messages) => {
    return { ...state, messages };
  })
  .case(ActionMessage.addMessage, (state, message) => {
    return {
      ...state,
      messages: [...state.messages, message],
    };
  })
  .case(ActionMessage.deleteMessages, (state, messageIds) => {
    const messages = state.messages.filter(
      (message) => !messageIds.includes(message.id)
    );
    return {
      ...state,
      messages,
    };
  });
