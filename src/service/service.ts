import { Dispatch } from 'redux';
import { modalOpend } from './modal';
import { userRegister } from './user'
import { setWebsocket } from './socket'

export const service = {
    modalOpend: (dispatch: Dispatch, openedModalName: string) => modalOpend(dispatch, openedModalName),
    userRegister: (dispatch: Dispatch, socket: WebSocket, name: string) => userRegister(dispatch, socket, name),
    setWebsocket: (dispatch: Dispatch) => setWebsocket(dispatch),
}