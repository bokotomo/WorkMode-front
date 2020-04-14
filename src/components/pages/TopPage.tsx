import React from 'react'
import { TaskCard } from '../../types/taskBoard';
import { Message } from '../../types/message';
import { ActiveUser } from '../../types/activeUser';
import { Room } from '../../types/room';
import { TopPageHandler } from '../../containers/TopPageContainer';
import { TaskBoard } from '../organisms/TaskBoard';
import { MessageBoard } from '../organisms/MessageBoard';
import { ModalAddTask } from '../modal/ModalAddTask';
import { ModalDoneTask } from '../modal/ModalDoneTask';
import { ModalTaskDetail } from '../modal/ModalTaskDetail';
import { ModalRegisterUser } from '../modal/ModalRegisterUser';

interface OwnProps {
    readonly openedModalName: string
    readonly todos: TaskCard[],
    readonly inProgresses: TaskCard[],
    readonly dones: TaskCard[],
    readonly messages: Message[],
    readonly activeUsers: ActiveUser[],
    readonly rooms: Room[],
    readonly selectedTask: TaskCard,
    readonly myId: string,
    readonly myName: string,
    readonly isLogined: boolean,
}
type Props = OwnProps & TopPageHandler
export class TopPage extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.props.handleOnSetWebSocket()
        this.props.handleOnAuthentication()
        this.props.handleOnSetTask()
        this.props.handleOnSetMessage()
        this.props.handleOnSetActiveUser()
        this.props.handleOnSetRoom()
    }

    render() {
        return (
            <div style={{
                color: 'white',
                display: 'flex',
                height: '100%',
            }}>
                <ModalRegisterUser
                    openedModalName={this.props.openedModalName}
                    handleOnModalOpend={this.props.handleOnModalOpend}
                    handleOnCreateUser={this.props.handleOnCreateUser}
                />
                <ModalAddTask
                    openedModalName={this.props.openedModalName}
                    handleOnModalOpend={this.props.handleOnModalOpend}
                    handleOnAddTaskTodo={this.props.handleOnAddTaskTodo}
                />
                <ModalDoneTask
                    openedModalName={this.props.openedModalName}
                    handleOnModalOpend={this.props.handleOnModalOpend}
                />
                <ModalTaskDetail
                    openedModalName={this.props.openedModalName}
                    handleOnModalOpend={this.props.handleOnModalOpend}
                    selectedTask={this.props.selectedTask}
                />
                <TaskBoard
                    handleOnModalOpend={this.props.handleOnModalOpend}
                    handleOnSetSelectedTask={this.props.handleOnSetSelectedTask}
                    handleOnSetTaskTodo={this.props.handleOnSetTaskTodo}
                    handleOnSetTaskInProgresses={this.props.handleOnSetTaskInProgresses}
                    handleOnSetTaskDone={this.props.handleOnSetTaskDone}
                    handleOnAddMessage={this.props.handleOnAddMessage}
                    todos={this.props.todos}
                    inProgresses={this.props.inProgresses}
                    dones={this.props.dones}
                />
                <MessageBoard
                    messages={this.props.messages}
                    activeUsers={this.props.activeUsers}
                    rooms={this.props.rooms}
                />

                {/*<Header title='Logo' />
                <Contents />
                <TextInput title='入力' inputValue={this.props.inputValue} onChangeValue={this.props.handleOnChangeValue} />
                <RadioInput title='ラジオ' selectedValue={this.props.selectedValue} onChangeValue={this.props.handleOnSelectValue} />
                <SubmitButton title='Click me' onClick={this.props.handleOnClick} />
                <ShowState inputValue={this.props.inputValue} selectedValue={this.props.selectedValue} clickCount={this.props.clickCount} /> */}
            </div>
        )
    }
}