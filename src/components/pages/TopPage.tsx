import React from 'react'
import { TopPageHandler } from '../../containers/TopPageContainer';
import { TaskBoard } from '../organisms/TaskBoard';
import { MessageBoard } from '../organisms/MessageBoard';
import { ModalAddTask } from '../modal/ModalAddTask';

const style = {
    color: "white",
    display: "flex",
    height: "100%",
};

interface OwnProps {
    inputValue: string
    selectedValue: string
    clickCount: number
    isModalOpened: boolean
}
type Props = OwnProps & TopPageHandler
export class TopPage extends React.Component<Props> {
    render() {
        return (
            <div style={style}>
                <ModalAddTask
                    isModalOpened={this.props.isModalOpened}
                    handleOnModalOpend={this.props.handleOnModalOpend}
                />
                <TaskBoard handleOnModalOpend={this.props.handleOnModalOpend} />
                <MessageBoard />

                {/*<Header title="Logo" />
                <Contents />
                <TextInput title='入力' inputValue={this.props.inputValue} onChangeValue={this.props.handleOnChangeValue} />
                <RadioInput title='ラジオ' selectedValue={this.props.selectedValue} onChangeValue={this.props.handleOnSelectValue} />
                <SubmitButton title='Click me' onClick={this.props.handleOnClick} />
                <ShowState inputValue={this.props.inputValue} selectedValue={this.props.selectedValue} clickCount={this.props.clickCount} /> */}
            </div>
        )
    }
}