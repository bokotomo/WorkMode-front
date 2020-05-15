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

const mapStateToProps = (state: AppState) => {
  return {
    todos: state.task.todos,
    inProgresses: state.task.inProgresses,
    dones: state.task.dones,
    myId: state.auth.id,
    myName: state.auth.name,
    isLogined: state.auth.isLogined,
    messages: state.message.messages,
    activeUsers: state.user.activeUsers,
    rooms: state.room.rooms,
    selectedTask: state.task.selectedTask,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // websokect
    setWebSocket: () => service.setWebsocket(dispatch),

    // task
    setTaskTodo: (tasks: TaskCard[]) => dispatch(ActionTask.setTodo(tasks)),
    setTaskInProgresses: (tasks: TaskCard[]) =>
      dispatch(ActionTask.setInProgresses(tasks)),
    setTaskDone: (tasks: TaskCard[]) => dispatch(ActionTask.setDone(tasks)),
    setSelectedTask: (task: TaskCard) =>
      dispatch(ActionTask.setSelectedTask(task)),

    // task request
    addTaskTodo: (task: TaskCard) => dispatch(ActionTask.requestCreate(task)),
    updateTaskStatus: (taskId: string, status: string) =>
      dispatch(
        ActionTask.requestUpdateStatus({ id: taskId, status } as TaskCard)
      ),
    deleteTask: (taskId: string) => dispatch(ActionTask.requestDelete(taskId)),
    updateTask: (task: TaskCard) => dispatch(ActionTask.requestUpdate(task)),

    // room
    setRoom: () => dispatch(ActionRoom.setRoom()),

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
