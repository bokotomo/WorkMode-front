import { reducerWithInitialState } from '../../node_modules/typescript-fsa-reducers';
import { ActionTopPage } from './actions';
import { TaskCard } from '../types/taskBoard';
import { Message } from '../types/message';

export interface State {
    inputValue: string
    selectedValue: string
    clickCount: number
    isModalOpened: boolean
    openedModalName: string
    todos: TaskCard[]
    inProgresses: TaskCard[]
    dones: TaskCard[]
    messages: Message[]
}

export const initialState: State = {
    inputValue: '',
    selectedValue: '',
    clickCount: 0,
    isModalOpened: true,
    openedModalName: '',
    todos: [],
    inProgresses: [],
    dones: [],
    messages: [],
}

export const Reducer = reducerWithInitialState(initialState)
    .case(ActionTopPage.updateTextInputValue, (state, inputValue) => {
        return { ...state, inputValue }
    })
    .case(ActionTopPage.updateSelectedValue, (state, selectedValue) => {
        return { ...state, selectedValue }
    })
    .case(ActionTopPage.updateClickCount, (state) => {
        return { ...state, clickCount: state.clickCount + 1 }
    })
    .case(ActionTopPage.updateModalOpened, (state, openedModalName) => {
        return { ...state, openedModalName }
    })
    .case(ActionTopPage.setTaskTodo, (state, todos) => {
        return { ...state, todos }
    })
    .case(ActionTopPage.addTaskTodo, (state, todo) => {
        return { ...state, todos: [...state.todos, todo] }
    })
    .case(ActionTopPage.setTaskInProgresses, (state, inProgresses) => {
        return { ...state, inProgresses }
    })
    .case(ActionTopPage.setTaskDone, (state, dones) => {
        return { ...state, dones }
    })
    .case(ActionTopPage.setMessage, (state, messages) => {
        return { ...state, messages }
    })