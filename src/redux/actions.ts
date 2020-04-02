import { actionCreatorFactory } from '../../node_modules/typescript-fsa';
import { TaskCard } from '../types/taskBoard';

const actionCreator = actionCreatorFactory()

export const ActionTopPage = {
    updateTextInputValue: actionCreator<string>('ACTIONS_UPDATE_TEXT_INPUT_VALUE'),
    updateSelectedValue: actionCreator<string>('ACTION_UPDATE_SELECTED_VALUE'),
    updateClickCount: actionCreator('ACTION_UPDATE_CLICK_COUNT'),
    updateModalOpened: actionCreator<string>('ACTION_UPDATE_MODAL_OPENED'),
    setTaskTodo: actionCreator<TaskCard[]>('SET_TASK_TODO'),
    setTaskInProgresses: actionCreator<TaskCard[]>('SET_TASK_INPROGRESSES'),
    setTaskDone: actionCreator<TaskCard[]>('SET_TASK_DONE'),
}