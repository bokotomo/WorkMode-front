import { actionCreatorFactory } from '../../node_modules/typescript-fsa';
import { TaskCard } from '../types/taskBoard';
import { Message } from '../types/message';
import { ActiveUser } from '../types/activeUser';
import { Room } from '../types/room';

const actionCreator = actionCreatorFactory()

export const ActionTopPage = {
    updateTextInputValue: actionCreator<string>('ACTIONS_UPDATE_TEXT_INPUT_VALUE'),
    updateSelectedValue: actionCreator<string>('ACTION_UPDATE_SELECTED_VALUE'),
    updateClickCount: actionCreator('ACTION_UPDATE_CLICK_COUNT'),
    updateModalOpened: actionCreator<string>('ACTION_UPDATE_MODAL_OPENED'),
    setTaskTodo: actionCreator<TaskCard[]>('SET_TASK_TODO'),
    addTaskTodo: actionCreator<TaskCard>('ADD_TASK_DONE'),
    setTaskInProgresses: actionCreator<TaskCard[]>('SET_TASK_INPROGRESSES'),
    setTaskDone: actionCreator<TaskCard[]>('SET_TASK_DONE'),
    setSelectedTask: actionCreator<TaskCard>('SET_SELECTED_TASK'),
    setMessage: actionCreator<Message[]>('SET_MESSAGE'),
    setActiveUser: actionCreator<ActiveUser[]>('SET_ACTIVE_USER'),
    setRoom: actionCreator<Room[]>('SET_ROOM'),
}