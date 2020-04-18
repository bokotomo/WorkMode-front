import { Dispatch } from 'redux';
import { Cookies } from 'react-cookie';
import { requestUserCreate } from '../controller/user'

export const serviceUserRegister = (dispatch: Dispatch, name: string) => {

    // requestUserCreate(
    //     {},
    //     name,
    // )
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