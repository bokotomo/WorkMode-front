import { actionCreatorFactory } from '../../../node_modules/typescript-fsa';
import { MessageProgress } from '../../types/messageProgress';

const actionCreator = actionCreatorFactory()

export const ActionMessage = {
    setMessage: actionCreator('SET_MESSAGE'),
    addMessage: actionCreator<MessageProgress>('ADD_MESSAGE'),
}