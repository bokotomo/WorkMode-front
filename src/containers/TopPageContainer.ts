import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TopPage } from '../components/pages/TopPage';
import { ActionUser } from '../redux/actions/user';
import { ActionTask } from '../redux/actions/task';
import { ActionMessage } from '../redux/actions/message';
import { ActionRoom } from '../redux/actions/room';
import { AppState } from '../redux/store';
import { TaskCard } from '../types/taskBoard';
import { MessageProgress } from '../types/messageProgress';
import { serviceUserRegister } from '../service/user'
import { serviceSetWebsocket } from '../service/websocket'
import { serviceModalOpend } from '../service/modal'

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
    registerUser(name: string): void
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
        setWebSocket: () => serviceSetWebsocket(dispatch),
        handleOnModalOpend: (openedModalName: string) => serviceModalOpend(dispatch, openedModalName),
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
        registerUser: (name: string) => serviceUserRegister(dispatch, name),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPage)
