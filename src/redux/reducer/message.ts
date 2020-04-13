import { reducerWithInitialState } from '../../../node_modules/typescript-fsa-reducers';
import { ActionMessage } from '../actions/message';
import { initialStateAuth } from '../reducer/auth';
import { Message } from '../../types/message';
import { mockMessages } from '../../mock/messages';

export interface StateMessage {
    readonly messages: Message[]
}

export const initialStateMessage: StateMessage = {
    messages: [],
}

export const ReducerMessage = reducerWithInitialState(initialStateMessage)
    .case(ActionMessage.setMessage, (state) => {
        return { ...state, messages: mockMessages }
    })
    .case(ActionMessage.addMessage, (state, message) => {
        return {
            ...state, messages: [
                ...state.messages,
                {
                    id: message.id,
                    userName: initialStateAuth.name,
                    userColor: '#8A29AD',
                    text: message.title,
                    progress: message.progress,
                    status: message.status,
                    createdAt: new Date(),
                },
            ]
        }
    })