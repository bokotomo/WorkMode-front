import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TopPageActions } from "../redux/actions";
import { TopPage } from "../components/pages/TopPage";
import { AppState } from "../redux/store";

export interface TopPageHandler {
    handleOnChangeValue(value: string): void
    handleOnSelectValue(value: string): void
    handleOnClick(): void
    handleOnModalOpend(value: boolean): void
}

const mapStateToProps = (appState: AppState) => {
    return {
        ...appState.state,
        inputValue: appState.state.inputValue,
        selectedValue: appState.state.selectedValue,
        clickCount: appState.state.clickCount,
        isModalOpened: appState.state.isModalOpened,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleOnChangeValue: (value: string) => { dispatch(TopPageActions.updateTextInputValue(value)) },
        handleOnSelectValue: (value: string) => { dispatch(TopPageActions.updateSelectedValue(value)) },
        handleOnClick: () => { dispatch(TopPageActions.updateClickCount()) },
        handleOnModalOpend: (value: boolean) => { dispatch(TopPageActions.updateModalOpened(value)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPage)