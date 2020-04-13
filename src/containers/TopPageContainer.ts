import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TopPage } from '../components/pages/TopPage';
import { ActionUser } from '../redux/actions/user';
import { ActionAuth } from '../redux/actions/auth';
import { ActionTask } from '../redux/actions/task';
import { ActionMessage } from '../redux/actions/message';
import { ActionRoom } from '../redux/actions/room';
import { ActionModal } from '../redux/actions/modal';
import { AppState } from '../redux/store';
import { TaskCard } from '../types/taskBoard';
import { MessageProgress } from '../types/messageProgress';
import { Cookies } from 'react-cookie';

// const WebSocket = require('ws');
// const ws = new WebSocket(process.env.REACT_APP_API_ENDPOINT, {
//     perMessageDeflate: false
// });
// ws.on('open', function open() {
//     ws.send('something');
// });

// ws.on('message', function incoming(data: any) {
//     console.log(data);
// });
// alert(process.env.REACT_APP_API_ENDPOINT);

export interface TopPageHandler {
    handleOnModalOpend(value: string): void
    handleOnSetTask(): void
    handleOnSetTaskTodo(value: TaskCard[]): void
    handleOnSetTaskInProgresses(value: TaskCard[]): void
    handleOnSetTaskDone(value: TaskCard[]): void
    handleOnSetSelectedTask(task: TaskCard): void
    handleOnAddTaskTodo(task: TaskCard): void
    handleOnSetMessage(): void
    handleOnAddMessage(message: MessageProgress): void
    handleOnSetActiveUser(): void
    handleOnSetRoom(): void
    handleOnCreateUser(name: string): void
    handleOnAuthentication(): void
}

const mapStateToProps = (appState: AppState) => {
    return {
        todos: appState.task.todos,
        inProgresses: appState.task.inProgresses,
        dones: appState.task.dones,
        myId: appState.auth.id,
        myName: appState.auth.name,
        isLogined: appState.auth.isLogined,
        openedModalName: appState.modal.openedModalName,
        messages: appState.message.messages,
        activeUsers: appState.user.activeUsers,
        rooms: appState.room.rooms,
        selectedTask: appState.task.selectedTask,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleOnModalOpend: (value: string) => { dispatch(ActionModal.updateModalOpened(value)) },
        handleOnSetTask: () => { dispatch(ActionTask.setTask()) },
        handleOnSetTaskTodo: (value: TaskCard[]) => { dispatch(ActionTask.setTaskTodo(value)) },
        handleOnSetTaskInProgresses: (value: TaskCard[]) => { dispatch(ActionTask.setTaskInProgresses(value)) },
        handleOnSetTaskDone: (value: TaskCard[]) => { dispatch(ActionTask.setTaskDone(value)) },
        handleOnSetSelectedTask: (task: TaskCard) => { dispatch(ActionTask.setSelectedTask(task)) },
        handleOnAddTaskTodo: (task: TaskCard) => { dispatch(ActionTask.addTaskTodo(task)) },
        handleOnSetMessage: () => { dispatch(ActionMessage.setMessage()) },
        handleOnAddMessage: (messageProgress: MessageProgress) => { dispatch(ActionMessage.addMessage(messageProgress)) },
        handleOnSetActiveUser: () => { dispatch(ActionUser.setActiveUser()) },
        handleOnSetRoom: () => { dispatch(ActionRoom.setRoom()) },
        handleOnCreateUser: (name: string) => {
            const token = 'token'
            // request create user
            new Cookies().set('token', token, { path: '/' });
            const isLogined = true
            const id = '1'
            dispatch(ActionAuth.setAuth({
                id,
                name,
                token,
                isLogined,
            }))
        },
        handleOnAuthentication: () => {
            const token = new Cookies().get('token') || ''
            // authentication token
            const id = '1'
            const name = 'ttt'
            const isLogined = token !== ''
            dispatch(ActionAuth.setAuth({
                id,
                name,
                token,
                isLogined,
            }))
            if (!isLogined) {
                dispatch(ActionModal.updateModalOpened('register'))
            }
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPage)
