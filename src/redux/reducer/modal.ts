import { ActionModal } from '@/redux/actions/modal';
import { reducerWithInitialState } from '../../../node_modules/typescript-fsa-reducers';

export interface StateModal {
  readonly openedModalName: string;
}

export const initialStateModal: StateModal = {
  openedModalName: '',
};

export const ReducerModal = reducerWithInitialState(initialStateModal).case(
  ActionModal.updateModalOpened,
  (state, openedModalName) => {
    return { ...state, openedModalName };
  }
);
