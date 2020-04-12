import { actionCreatorFactory } from '../../../node_modules/typescript-fsa';

const actionCreator = actionCreatorFactory()

export const ActionRoom = {
    setRoom: actionCreator('SET_ROOM'),
}