import { actionCreatorFactory } from '../../../node_modules/typescript-fsa';

const actionCreator = actionCreatorFactory()

export const ActionUser = {
    setActiveUser: actionCreator('SET_ACTIVE_USER'),
}