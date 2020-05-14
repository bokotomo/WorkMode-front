import React from 'react';
import { TaskCard } from '@/types/taskBoard';
import { Message } from '@/types/message';
import { ActiveUser } from '@/types/activeUser';
import { Room } from '@/types/room';
import { TaskBoard } from '@/components/task/organisms/TaskBoard';
import { MessageBoard } from '@/components/task/organisms/MessageBoard';
import { ModalAddTask } from '@/components/task/modal/ModalAddTask';
import { ModalDoneTask } from '@/components/task/modal/ModalDoneTask';
import { ModalTaskDetail } from '@/components/task/modal/ModalTaskDetail';
import { ModalRegisterUser } from '@/components/task/modal/ModalRegisterUser';
import { ModalSendReaction } from '@/components/task/modal/ModalSendReaction';

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
interface Handler {
  setWebSocket(): void;
  handleOnModalOpend(openedModalName: string): void;
  handleOnSetTaskTodo(tasks: TaskCard[]): void;
  handleOnSetTaskInProgresses(tasks: TaskCard[]): void;
  handleOnSetTaskDone(tasks: TaskCard[]): void;
  handleOnSetSelectedTask(task: TaskCard): void;
  handleOnAddTaskTodo(socket: WebSocket, task: TaskCard): void;
  updateTaskStatus(socket: WebSocket, taskId: string, status: string): void;
  handleOnSetRoom(): void;
  registerGuestUser(socket: WebSocket, name: string): void;
  registerUser(
    socket: WebSocket,
    email: string,
    name: string,
    password: string
  ): void;
  signin(socket: WebSocket, email: string, password: string): void;
  deleteTask(socket: WebSocket, taskId: string): void;
  updateTask(socket: WebSocket, task: TaskCard): void;
}

type Props = OwnProps & Handler;
export class TopPage extends React.Component<Props> {
  componentDidMount() {
    this.props.setWebSocket();
    this.props.handleOnSetRoom();
  }

  // 各コンポーネントからreduxを呼び出すこともできるが、引数として渡した方がより厳密なのと、このページ量だと必要ないためやってない。
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
          registerGuestUser={this.props.registerGuestUser}
          registerUser={this.props.registerUser}
          signin={this.props.signin}
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
          updateTask={this.props.updateTask}
          deleteTask={this.props.deleteTask}
          selectedTask={this.props.selectedTask}
          socket={this.props.socket}
        />
        <ModalSendReaction
          openedModalName={this.props.openedModalName}
          handleOnModalOpend={this.props.handleOnModalOpend}
          socket={this.props.socket}
        />
        <TaskBoard
          handleOnModalOpend={this.props.handleOnModalOpend}
          handleOnSetSelectedTask={this.props.handleOnSetSelectedTask}
          handleOnSetTaskTodo={this.props.handleOnSetTaskTodo}
          handleOnSetTaskInProgresses={this.props.handleOnSetTaskInProgresses}
          handleOnSetTaskDone={this.props.handleOnSetTaskDone}
          updateTaskStatus={this.props.updateTaskStatus}
          todos={this.props.todos}
          inProgresses={this.props.inProgresses}
          dones={this.props.dones}
          socket={this.props.socket}
        />
        <MessageBoard
          handleOnModalOpend={this.props.handleOnModalOpend}
          myId={this.props.myId}
          messages={this.props.messages}
          activeUsers={this.props.activeUsers}
          rooms={this.props.rooms}
        />
      </div>
    );
  }
}
