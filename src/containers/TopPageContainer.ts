import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TopPage } from '@/components/task/Base';
import { ActionTask } from '@/redux/actions/task';
import { ActionRoom } from '@/redux/actions/room';
import { AppState } from '@/redux/store';
import { service } from '@/redux/service/service';
import { TaskCard } from '@/types/taskBoard';

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
      service.modalOpend(dispatch, openedModalName),
    handleOnSetTaskTodo: (tasks: TaskCard[]) =>
      dispatch(ActionTask.setTaskTodo(tasks)),
    handleOnSetTaskInProgresses: (tasks: TaskCard[]) =>
      dispatch(ActionTask.setTaskInProgresses(tasks)),
    handleOnSetTaskDone: (tasks: TaskCard[]) =>
      dispatch(ActionTask.setTaskDone(tasks)),
    handleOnSetSelectedTask: (task: TaskCard) =>
      dispatch(ActionTask.setSelectedTask(task)),
    handleOnAddTaskTodo: (socket: WebSocket, task: TaskCard) =>
      service.addTask(dispatch, socket, task),
    updateTaskStatus: (socket: WebSocket, taskId: string, status: string) =>
      service.updateTaskStatus(dispatch, socket, taskId, status),
    handleOnSetRoom: () => dispatch(ActionRoom.setRoom()),
    registerGuestUser: (socket: WebSocket, name: string) =>
      service.userRegisterGuest(dispatch, socket, name),
    registerUser: (
      socket: WebSocket,
      name: string,
      email: string,
      password: string
    ) => service.userRegister(dispatch, socket, name, email, password),
    signin: (socket: WebSocket, email: string, password: string) =>
      service.userSignin(dispatch, socket, email, password),
    deleteTask: (socket: WebSocket, taskId: string) =>
      service.deleteTask(dispatch, socket, taskId),
    updateTask: (socket: WebSocket, task: TaskCard) =>
      service.updateTask(dispatch, socket, task),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopPage);
