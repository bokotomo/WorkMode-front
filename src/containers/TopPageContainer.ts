import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TopPage } from '../components/pages/TopPage';
import { ActionTask } from '../redux/actions/task';
import { ActionMessage } from '../redux/actions/message';
import { ActionRoom } from '../redux/actions/room';
import { AppState } from '../redux/store';
import { TaskCard } from '../types/taskBoard';
import { MessageProgress } from '../types/messageProgress';
import { service } from '../service/service'

export interface TopPageHandler {
    setWebSocket(): void
    handleOnModalOpend(openedModalName: string): void
    handleOnSetTask(): void
    handleOnSetTaskTodo(tasks: TaskCard[]): void
    handleOnSetTaskInProgresses(tasks: TaskCard[]): void
    handleOnSetTaskDone(tasks: TaskCard[]): void
    handleOnSetSelectedTask(task: TaskCard): void
    handleOnAddTaskTodo(socket: WebSocket, task: TaskCard): void
    handleOnSetMessage(): void
    handleOnAddMessage(message: MessageProgress): void
    handleOnSetRoom(): void
    registerUser(socket: WebSocket, name: string): void
}

const mapStateToProps = (appState: AppState) => {
    return {
        socket: appState.webSocket.socket,
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
        setWebSocket: () => service.setWebsocket(dispatch),
        handleOnModalOpend: (openedModalName: string) => service.modalOpend(dispatch, openedModalName),
        handleOnSetTask: () => dispatch(ActionTask.setTask()),
        handleOnSetTaskTodo: (tasks: TaskCard[]) => dispatch(ActionTask.setTaskTodo(tasks)),
        handleOnSetTaskInProgresses: (tasks: TaskCard[]) => dispatch(ActionTask.setTaskInProgresses(tasks)),
        handleOnSetTaskDone: (tasks: TaskCard[]) => dispatch(ActionTask.setTaskDone(tasks)),
        handleOnSetSelectedTask: (task: TaskCard) => dispatch(ActionTask.setSelectedTask(task)),
        handleOnAddTaskTodo: (socket: WebSocket, task: TaskCard) => service.addTask(dispatch, socket, task),
        handleOnSetMessage: () => dispatch(ActionMessage.setMessage()),
        handleOnAddMessage: (messageProgress: MessageProgress) => dispatch(ActionMessage.addMessage(messageProgress)),
        handleOnSetRoom: () => dispatch(ActionRoom.setRoom()),
        registerUser: (socket: WebSocket, name: string) => service.userRegister(dispatch, socket, name),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPage)
