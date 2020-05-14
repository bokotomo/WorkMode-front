import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TopPage } from '@/components/task/Base';
import { ActionTask } from '@/redux/action/task';
import { ActionRoom } from '@/redux/action/room';
import { ActionAuth } from '@/redux/action/auth';
import { ActionModal } from '@/redux/action/modal';
import { AppState } from '@/redux/reducer';
import service from '@/redux/service';
import { TaskCard } from '@/types/taskBoard';
import { User } from '@/types/user';

const mapStateToProps = (appState: AppState) => {
  return {
    socket: appState.webSocket.socket,
    todos: appState.task.todos,
    inProgresses: appState.task.inProgresses,
    dones: appState.task.dones,
    myId: appState.auth.id,
    myName: appState.auth.name,
    isLogined: appState.auth.isLogined,
    openedModalName: appState.modal.openedModalName,
    messages: appState.message.messages,
    activeUsers: appState.user.activeUsers,
    rooms: appState.room.rooms,
    selectedTask: appState.task.selectedTask,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setWebSocket: () => service.setWebsocket(dispatch),
    handleOnModalOpend: (openedModalName: string) =>
      dispatch(ActionModal.updateModalOpened(openedModalName)),
    handleOnSetTaskTodo: (tasks: TaskCard[]) =>
      dispatch(ActionTask.setTaskTodo(tasks)),
    handleOnSetTaskInProgresses: (tasks: TaskCard[]) =>
      dispatch(ActionTask.setTaskInProgresses(tasks)),
    handleOnSetTaskDone: (tasks: TaskCard[]) =>
      dispatch(ActionTask.setTaskDone(tasks)),
    handleOnSetSelectedTask: (task: TaskCard) =>
      dispatch(ActionTask.setSelectedTask(task)),

    // task
    handleOnAddTaskTodo: (socket: WebSocket, task: TaskCard) =>
      dispatch(ActionTask.requestTaskCreate(task)),
    updateTaskStatus: (socket: WebSocket, taskId: string, status: string) =>
      dispatch(
        ActionTask.requestTaskUpdateStatus({ id: taskId, status } as TaskCard)
      ),
    deleteTask: (socket: WebSocket, taskId: string) =>
      dispatch(ActionTask.requestTaskDelete(taskId)),
    updateTask: (socket: WebSocket, task: TaskCard) =>
      dispatch(ActionTask.requestTaskUpdate(task)),

    // room
    handleOnSetRoom: () => dispatch(ActionRoom.setRoom()),

    // user
    registerGuestUser: (socket: WebSocket, name: string) =>
      dispatch(ActionAuth.requestUserRegisterGuest(name)),
    registerUser: (
      socket: WebSocket,
      name: string,
      email: string,
      password: string
    ) =>
      dispatch(
        ActionAuth.requestUserRegister({ name, password, email } as User)
      ),
    signin: (socket: WebSocket, email: string, password: string) =>
      dispatch(ActionAuth.requestUserSignin({ email, password } as User)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopPage);
