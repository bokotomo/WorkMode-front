import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ActionTopPage } from "../redux/actions";
import { TopPage } from "../components/pages/TopPage";
import { AppState } from "../redux/store";
import { TaskCard } from '../types/taskBoard';
import { Message } from '../types/message';
import { ActiveUser } from '../types/activeUser';
import { Room } from '../types/room';

export interface TopPageHandler {
    handleOnChangeValue(value: string): void
    handleOnSelectValue(value: string): void
    handleOnClick(): void
    handleOnModalOpend(value: string): void
    handleOnSetTaskTodo(value: TaskCard[]): void
    handleOnSetTaskInProgresses(value: TaskCard[]): void
    handleOnSetTaskDone(value: TaskCard[]): void
    handleOnSetSelectedTask(value: TaskCard): void
    handleOnAddTaskTodo(value: TaskCard): void
    handleOnSetMessage(messages: Message[]): void
    handleOnSetActiveUser(messages: ActiveUser[]): void
    handleOnSetRoom(rooms: Room[]): void
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.state,
        inputValue: appState.state.inputValue,
        selectedValue: appState.state.selectedValue,
        clickCount: appState.state.clickCount,
        isModalOpened: appState.state.isModalOpened,
        openedModalName: appState.state.openedModalName,
        messages: appState.state.messages,
        activeUsers: appState.state.activeUsers,
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
        handleOnSetTaskTodo: (value: TaskCard[]) => { dispatch(ActionTopPage.setTaskTodo(value)) },
        handleOnSetTaskInProgresses: (value: TaskCard[]) => { dispatch(ActionTopPage.setTaskInProgresses(value)) },
        handleOnSetTaskDone: (value: TaskCard[]) => { dispatch(ActionTopPage.setTaskDone(value)) },
        handleOnSetSelectedTask: (task: TaskCard) => { dispatch(ActionTopPage.setSelectedTask(task)) },
        handleOnAddTaskTodo: (value: TaskCard) => { dispatch(ActionTopPage.addTaskTodo(value)) },
        handleOnSetMessage: (messages: Message[]) => { dispatch(ActionTopPage.setMessage(messages)) },
        handleOnSetActiveUser: (activeUsers: ActiveUser[]) => { dispatch(ActionTopPage.setActiveUser(activeUsers)) },
        handleOnSetRoom: (rooms: Room[]) => { dispatch(ActionTopPage.setRoom(rooms)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPage)