import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TopPage } from '@/components/task/Base';
import { ActionTask } from '@/redux/action/task';
import { ActionRoom } from '@/redux/action/room';
import { ActionAuth } from '@/redux/action/auth';
import { AppState } from '@/redux/reducer';
import service from '@/redux/service';
import { TaskCard } from '@/types/taskBoard';
import { User } from '@/types/user';

const mapStateToProps = (appState: AppState) => {
  return {
    todos: appState.task.todos,
    inProgresses: appState.task.inProgresses,
    dones: appState.task.dones,
    myId: appState.auth.id,
    myName: appState.auth.name,
    isLogined: appState.auth.isLogined,
    messages: appState.message.messages,
    activeUsers: appState.user.activeUsers,
    rooms: appState.room.rooms,
    selectedTask: appState.task.selectedTask,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // websokect
    setWebSocket: () => service.setWebsocket(dispatch),

    // task
    handleOnSetTaskTodo: (tasks: TaskCard[]) =>
      dispatch(ActionTask.setTaskTodo(tasks)),
    handleOnSetTaskInProgresses: (tasks: TaskCard[]) =>
      dispatch(ActionTask.setTaskInProgresses(tasks)),
    handleOnSetTaskDone: (tasks: TaskCard[]) =>
      dispatch(ActionTask.setTaskDone(tasks)),
    handleOnSetSelectedTask: (task: TaskCard) =>
      dispatch(ActionTask.setSelectedTask(task)),

    // task request
    handleOnAddTaskTodo: (task: TaskCard) =>
      dispatch(ActionTask.requestCreate(task)),
    updateTaskStatus: (taskId: string, status: string) =>
      dispatch(
        ActionTask.requestUpdateStatus({ id: taskId, status } as TaskCard)
      ),
    deleteTask: (taskId: string) => dispatch(ActionTask.requestDelete(taskId)),
    updateTask: (task: TaskCard) => dispatch(ActionTask.requestUpdate(task)),

    // room
    handleOnSetRoom: () => dispatch(ActionRoom.setRoom()),

    // user request
    registerGuestUser: (name: string) =>
      dispatch(ActionAuth.requestUserRegisterGuest(name)),
    registerUser: (name: string, email: string, password: string) =>
      dispatch(
        ActionAuth.requestUserRegister({ name, password, email } as User)
      ),
    signin: (email: string, password: string) =>
      dispatch(ActionAuth.requestUserSignin({ email, password } as User)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopPage);
