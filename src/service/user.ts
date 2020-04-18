import { Dispatch } from 'redux';
import { Cookies } from 'react-cookie';
import { requestUserCreate } from '../controller/user'

export const userRegister = (dispatch: Dispatch, socket: WebSocket, name: string) => {

    requestUserCreate(socket, name)
    alert(name)
    // , socket: WebSocket
    // request create user
    // dispatch(ActionAuth.setAuth({
    //     id,
    //     name,
    //     token,
    //     isLogined,
    // }))
    // new Cookies().set('token', token, { path: '/' });
}