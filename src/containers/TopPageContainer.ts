import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ActionUser } from "../redux/actions/user";
import { ActionAuth } from "../redux/actions/auth";
import { ActionTask } from "../redux/actions/task";
import { ActionMessage } from "../redux/actions/message";
import { ActionRoom } from "../redux/actions/room";
import { ActionModal } from "../redux/actions/modal";
import { TopPage } from "../components/pages/TopPage";
import { AppState } from "../redux/store";
import { TaskCard } from '../types/taskBoard';
import { MessageProgress } from '../types/messageProgress';

export interface TopPageHandler {
    handleOnModalOpend(value: string): void
    handleOnSetTask(): void
    handleOnSetTaskTodo(value: TaskCard[]): void
    handleOnSetTaskInProgresses(value: TaskCard[]): void
    handleOnSetTaskDone(value: TaskCard[]): void
    handleOnSetSelectedTask(value: TaskCard): void
    handleOnAddTaskTodo(value: TaskCard): void
    handleOnSetMessage(): void
    handleOnAddMessage(message: MessageProgress): void
    handleOnSetActiveUser(): void
    handleOnSetRoom(): void
    handleOnCreateUser(name: string): void
}

const mapStateToProps = (appState: AppState) => {
    return {
        todos: appState.task.todos,
        inProgresses: appState.task.inProgresses,
        dones: appState.task.dones,
        myId: appState.auth.id,
        myName: appState.auth.name,
        myToken: appState.auth.token,
        isModalOpened: appState.modal.isModalOpened,
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
        handleOnAddTaskTodo: (value: TaskCard) => { dispatch(ActionTask.addTaskTodo(value)) },
        handleOnSetMessage: () => { dispatch(ActionMessage.setMessage()) },
        handleOnAddMessage: (messageProgress: MessageProgress) => { dispatch(ActionMessage.addMessage(messageProgress)) },
        handleOnSetActiveUser: () => { dispatch(ActionUser.setActiveUser()) },
        handleOnSetRoom: () => { dispatch(ActionRoom.setRoom()) },
        handleOnCreateUser: (name: string) => { dispatch(ActionAuth.createUser(name)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPage)
