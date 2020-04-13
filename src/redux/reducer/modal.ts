import { reducerWithInitialState } from '../../../node_modules/typescript-fsa-reducers';
import { ActionModal } from '../actions/modal';

export interface StateModal {
    openedModalName: string
}

export const initialStateModal: StateModal = {
    openedModalName: '',
}

export const ReducerModal = reducerWithInitialState(initialStateModal)
    .case(ActionModal.updateModalOpened, (state, openedModalName) => {
        return { ...state, openedModalName }
    })