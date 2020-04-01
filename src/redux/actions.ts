import { actionCreatorFactory } from '../../node_modules/typescript-fsa';

const actionCreator = actionCreatorFactory()

export const TopPageActions = {
    updateTextInputValue: actionCreator<string>('ACTIONS_UPDATE_TEXT_INPUT_VALUE'),
    updateSelectedValue: actionCreator<string>('ACTION_UPDATE_SELECTED_VALUE'),
    updateClickCount: actionCreator('ACTION_UPDATE_CLICK_COUNT'),
    updateModalOpened: actionCreator<boolean>('ACTION_UPDATE_MODAL_OPENED'),
}