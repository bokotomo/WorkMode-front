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
import { taskTodos, taskInprogresses, taskDones } from '../../mock/tasks';
import { messages as mockMessages } from '../../mock/messages';
import { activeUsers } from '../../mock/activeUsers';
import { rooms as mockRooms } from '../../mock/rooms';
import { Card } from '../atom/card';

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
    activeUsers: ActiveUser[],
    rooms: Room[],
    selectedTask: TaskCard,
}
type Props = OwnProps & TopPageHandler
export class TopPage extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.props.handleOnSetTaskTodo(taskTodos)
        this.props.handleOnSetTaskInProgresses(taskInprogresses)
        this.props.handleOnSetTaskDone(taskDones)
        this.props.handleOnSetMessage(mockMessages)
        this.props.handleOnSetActiveUser(activeUsers)
        this.props.handleOnSetRoom(mockRooms)
    }

    render() {
        return (
            <Card />
            // <div style={{
            //     color: "white",
            //     display: "flex",
            //     height: "100%",
            // }}>
            //     <ModalAddTask
            //         isModalOpened={this.props.isModalOpened}
            //         openedModalName={this.props.openedModalName}
            //         handleOnModalOpend={this.props.handleOnModalOpend}
            //         handleOnAddTaskTodo={this.props.handleOnAddTaskTodo}
            //     />
            //     <ModalDoneTask
            //         isModalOpened={this.props.isModalOpened}
            //         openedModalName={this.props.openedModalName}
            //         handleOnModalOpend={this.props.handleOnModalOpend}
            //     />
            //     <ModalTaskDetail
            //         isModalOpened={this.props.isModalOpened}
            //         openedModalName={this.props.openedModalName}
            //         handleOnModalOpend={this.props.handleOnModalOpend}
            //         selectedTask={this.props.selectedTask}
            //     />
            //     <TaskBoard
            //         handleOnModalOpend={this.props.handleOnModalOpend}
            //         handleOnSetSelectedTask={this.props.handleOnSetSelectedTask}
            //         todos={this.props.todos}
            //         inProgresses={this.props.inProgresses}
            //         dones={this.props.dones}
            //     />
            //     <MessageBoard
            //         messages={this.props.messages}
            //         activeUsers={this.props.activeUsers}
            //         rooms={this.props.rooms}
            //     />

            //     {/*<Header title="Logo" />
            //     <Contents />
            //     <TextInput title='入力' inputValue={this.props.inputValue} onChangeValue={this.props.handleOnChangeValue} />
            //     <RadioInput title='ラジオ' selectedValue={this.props.selectedValue} onChangeValue={this.props.handleOnSelectValue} />
            //     <SubmitButton title='Click me' onClick={this.props.handleOnClick} />
            //     <ShowState inputValue={this.props.inputValue} selectedValue={this.props.selectedValue} clickCount={this.props.clickCount} /> */}
            // </div>
        )
    }
}