import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TopPage } from '../components/pages/TopPage';
import { ActionUser } from '../redux/actions/user';
import { ActionAuth } from '../redux/actions/auth';
import { ActionTask } from '../redux/actions/task';
import { ActionMessage } from '../redux/actions/message';
import { ActionRoom } from '../redux/actions/room';
import { ActionModal } from '../redux/actions/modal';
import { ActionWebSocket } from '../redux/actions/webSocket';
import { AppState } from '../redux/store';
import { TaskCard } from '../types/taskBoard';
import { MessageProgress } from '../types/messageProgress';
import { Cookies } from 'react-cookie';
import { onMessage, onOpen } from '../handler/websocket';

export interface TopPageHandler {
    setWebSocket(): void
    handleOnModalOpend(openedModalName: string): void
    handleOnSetTask(): void
    handleOnSetTaskTodo(tasks: TaskCard[]): void
    handleOnSetTaskInProgresses(tasks: TaskCard[]): void
    handleOnSetTaskDone(tasks: TaskCard[]): void
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
        setWebSocket: () => {
            const socket = new WebSocket(process.env.REACT_APP_API_ENDPOINT as string);
            socket.onmessage = (message: MessageEvent) => onMessage(message, socket, dispatch);
            socket.onopen = (event: Event) => onOpen(event, socket);
            dispatch(ActionWebSocket.setWebSocket(socket));
        },
        handleOnModalOpend: (openedModalName: string) => { dispatch(ActionModal.updateModalOpened(openedModalName)) },
        handleOnSetTask: () => { dispatch(ActionTask.setTask()) },
        handleOnSetTaskTodo: (tasks: TaskCard[]) => { dispatch(ActionTask.setTaskTodo(tasks)) },
        handleOnSetTaskInProgresses: (tasks: TaskCard[]) => { dispatch(ActionTask.setTaskInProgresses(tasks)) },
        handleOnSetTaskDone: (tasks: TaskCard[]) => { dispatch(ActionTask.setTaskDone(tasks)) },
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
