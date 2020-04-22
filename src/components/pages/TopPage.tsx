import React from 'react';
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

// 各コンポーネントからreduxを呼び出すこともできるが、引数として渡した方がより厳密なのと、このページ量だと必要ないためやってない。
interface OwnProps {
  readonly socket: WebSocket;
  readonly openedModalName: string;
  readonly todos: TaskCard[];
  readonly inProgresses: TaskCard[];
  readonly dones: TaskCard[];
  readonly messages: Message[];
  readonly activeUsers: ActiveUser[];
  readonly rooms: Room[];
  readonly selectedTask: TaskCard;
  readonly myId: string;
  readonly myName: string;
  readonly isLogined: boolean;
}
type Props = OwnProps & TopPageHandler;
export class TopPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.setWebSocket();
    this.props.handleOnSetMessage();
    this.props.handleOnSetRoom();
  }

  render() {
    return (
      <div
        style={{
          color: 'white',
          display: 'flex',
          height: '100%',
        }}
      >
        <ModalRegisterUser
          openedModalName={this.props.openedModalName}
          handleOnModalOpend={this.props.handleOnModalOpend}
          socket={this.props.socket}
          registerUser={this.props.registerUser}
        />
        <ModalAddTask
          openedModalName={this.props.openedModalName}
          socket={this.props.socket}
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
          deleteTask={this.props.deleteTask}
          selectedTask={this.props.selectedTask}
          socket={this.props.socket}
        />
        <TaskBoard
          handleOnModalOpend={this.props.handleOnModalOpend}
          handleOnSetSelectedTask={this.props.handleOnSetSelectedTask}
          handleOnSetTaskTodo={this.props.handleOnSetTaskTodo}
          handleOnSetTaskInProgresses={this.props.handleOnSetTaskInProgresses}
          handleOnSetTaskDone={this.props.handleOnSetTaskDone}
          handleOnAddMessage={this.props.handleOnAddMessage}
          updateTaskStatus={this.props.updateTaskStatus}
          todos={this.props.todos}
          inProgresses={this.props.inProgresses}
          dones={this.props.dones}
          socket={this.props.socket}
        />
        <MessageBoard
          messages={this.props.messages}
          activeUsers={this.props.activeUsers}
          rooms={this.props.rooms}
        />
      </div>
    );
  }
}
