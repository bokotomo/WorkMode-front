import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ActionTopPage } from "../redux/actions";
import { ActionUser } from "../redux/actions/user";
import { ActionAuth } from "../redux/actions/auth";
import { TopPage } from "../components/pages/TopPage";
import { AppState } from "../redux/store";
import { TaskCard } from '../types/taskBoard';
import { Message } from '../types/message';

export interface TopPageHandler {
    handleOnChangeValue(value: string): void
    handleOnSelectValue(value: string): void
    handleOnClick(): void
    handleOnModalOpend(value: string): void
    handleOnSetTask(): void
    handleOnSetTaskTodo(value: TaskCard[]): void
    handleOnSetTaskInProgresses(value: TaskCard[]): void
    handleOnSetTaskDone(value: TaskCard[]): void
    handleOnSetSelectedTask(value: TaskCard): void
    handleOnAddTaskTodo(value: TaskCard): void
    handleOnSetMessage(): void
    handleOnAddMessage(message: Message): void
    handleOnSetActiveUser(): void
    handleOnSetRoom(): void
    handleOnCreateUser(name: string): void
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.state,
        myId: appState.auth.id,
        myName: appState.auth.name,
        myToken: appState.auth.token,
        inputValue: appState.state.inputValue,
        selectedValue: appState.state.selectedValue,
        clickCount: appState.state.clickCount,
        isModalOpened: appState.state.isModalOpened,
        openedModalName: appState.state.openedModalName,
        messages: appState.state.messages,
        activeUsers: appState.user.activeUsers,
        rooms: appState.state.rooms,
        selectedTask: appState.state.selectedTask,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleOnChangeValue: (value: string) => { dispatch(ActionTopPage.updateTextInputValue(value)) },
        handleOnSelectValue: (value: string) => { dispatch(ActionTopPage.updateSelectedValue(value)) },
        handleOnClick: () => { dispatch(ActionTopPage.updateClickCount()) },
        handleOnModalOpend: (value: string) => { dispatch(ActionTopPage.updateModalOpened(value)) },
        handleOnSetTask: () => { dispatch(ActionTopPage.setTask()) },
        handleOnSetTaskTodo: (value: TaskCard[]) => { dispatch(ActionTopPage.setTaskTodo(value)) },
        handleOnSetTaskInProgresses: (value: TaskCard[]) => { dispatch(ActionTopPage.setTaskInProgresses(value)) },
        handleOnSetTaskDone: (value: TaskCard[]) => { dispatch(ActionTopPage.setTaskDone(value)) },
        handleOnSetSelectedTask: (task: TaskCard) => { dispatch(ActionTopPage.setSelectedTask(task)) },
        handleOnAddTaskTodo: (value: TaskCard) => { dispatch(ActionTopPage.addTaskTodo(value)) },
        handleOnSetMessage: () => { dispatch(ActionTopPage.setMessage()) },
        handleOnAddMessage: (message: Message) => { dispatch(ActionTopPage.addMessage(message)) },
        handleOnSetActiveUser: () => { dispatch(ActionUser.setActiveUser()) },
        handleOnSetRoom: () => { dispatch(ActionTopPage.setRoom()) },
        handleOnCreateUser: (name: string) => { dispatch(ActionAuth.createUser(name)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPage)
