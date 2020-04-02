import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ActionTopPage } from "../redux/actions";
import { TopPage } from "../components/pages/TopPage";
import { AppState } from "../redux/store";
import { TaskCard } from '../types/taskBoard';

export interface TopPageHandler {
    handleOnChangeValue(value: string): void
    handleOnSelectValue(value: string): void
    handleOnClick(): void
    handleOnModalOpend(value: string): void
    handleOnSetTaskTodo(value: TaskCard[]): void
    handleOnSetTaskInProgresses(value: TaskCard[]): void
    handleOnSetTaskDone(value: TaskCard[]): void
    handleOnAddTaskTodo(value: TaskCard): void
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.state,
        inputValue: appState.state.inputValue,
        selectedValue: appState.state.selectedValue,
        clickCount: appState.state.clickCount,
        isModalOpened: appState.state.isModalOpened,
        openedModalName: appState.state.openedModalName,
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
        handleOnAddTaskTodo: (value: TaskCard) => { dispatch(ActionTopPage.addTaskTodo(value)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPage)