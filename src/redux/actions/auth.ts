import { actionCreatorFactory } from '../../../node_modules/typescript-fsa';
import { AreducerAuthUser } from '../../types/reducer_auth';

const actionCreator = actionCreatorFactory()

export const ActionAuth = {
    setAuth: actionCreator<AreducerAuthUser>('SET_AUTH'),
}