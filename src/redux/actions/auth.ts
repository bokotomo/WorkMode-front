import { actionCreatorFactory } from '../../../node_modules/typescript-fsa';

const actionCreator = actionCreatorFactory()

export const ActionAuth = {
    createUser: actionCreator<string>('CREATE_USER'),
}