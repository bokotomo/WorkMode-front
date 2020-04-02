import React from 'react'
import { TaskCard } from '../../types/taskBoard';
import { Message } from '../../types/message';
import { TopPageHandler } from '../../containers/TopPageContainer';
import { TaskBoard } from '../organisms/TaskBoard';
import { MessageBoard } from '../organisms/MessageBoard';
import { ModalAddTask } from '../modal/ModalAddTask';
import { ModalDoneTask } from '../modal/ModalDoneTask';
import { taskTodos, taskInprogresses, taskDones } from '../../mock/tasks';
import { messages as mockMessages } from '../../mock/messages';

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
    openedModalName: string
    todos: TaskCard[],
    inProgresses: TaskCard[],
    dones: TaskCard[],
    messages: Message[],
}
type Props = OwnProps & TopPageHandler
export class TopPage extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.props.handleOnSetTaskTodo(taskTodos)
        this.props.handleOnSetTaskInProgresses(taskInprogresses)
        this.props.handleOnSetTaskDone(taskDones)
        this.props.handleOnSetMessage(mockMessages)
    }

    render() {
        return (
            <div style={style}>
                <ModalAddTask
                    isModalOpened={this.props.isModalOpened}
                    openedModalName={this.props.openedModalName}
                    handleOnModalOpend={this.props.handleOnModalOpend}
                    handleOnAddTaskTodo={this.props.handleOnAddTaskTodo}
                />
                <ModalDoneTask
                    isModalOpened={this.props.isModalOpened}
                    openedModalName={this.props.openedModalName}
                    handleOnModalOpend={this.props.handleOnModalOpend}
                />
                <TaskBoard
                    handleOnModalOpend={this.props.handleOnModalOpend}
                    todos={this.props.todos}
                    inProgresses={this.props.inProgresses}
                    dones={this.props.dones}
                />
                <MessageBoard
                    messages={this.props.messages}
                />

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