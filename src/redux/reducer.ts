import { reducerWithInitialState } from '../../node_modules/typescript-fsa-reducers';
import { TopPageActions } from './actions';

export interface State {
    inputValue: string
    selectedValue: string
    clickCount: number
    isModalOpened: boolean
}

export const initialState: State = {
    inputValue: '',
    selectedValue: '',
    clickCount: 0,
    isModalOpened: true,
}

export const Reducer = reducerWithInitialState(initialState)
    .case(TopPageActions.updateTextInputValue, (state, inputValue) => {
        return { ...state, inputValue }
    })
    .case(TopPageActions.updateSelectedValue, (state, selectedValue) => {
        return { ...state, selectedValue }
    })
    .case(TopPageActions.updateClickCount, (state) => {
        return { ...state, clickCount: state.clickCount + 1 }
    })
    .case(TopPageActions.updateModalOpened, (state, isModalOpened) => {
        return { ...state, isModalOpened }
    })