import { Dispatch } from 'redux';
import { TaskCard } from '@/types/taskBoard';
import { ActionModal } from '@/redux/actions/modal';
import { ActionTask } from '@/redux/actions/task';

export const requestTaskCreate = (
  socket: WebSocket,
  dispatch: Dispatch,
  token: string,
  task: TaskCard
) => {
  if (token === '') {
    dispatch(ActionModal.updateModalOpened('register'));
    return;
  }
  const action = 'sendmessage';
  const role = 'task_create';
  const data = {
    role,
    token,
    task,
  };
  socket.send(JSON.stringify({ action, data }));
};

export const requestTaskUpdateStatus = (
  socket: WebSocket,
  dispatch: Dispatch,
  token: string,
  taskId: string,
  status: string
) => {
  const action = 'sendmessage';
  const role = 'task_update_status';
  const data = {
    role,
    token,
    taskId,
    status,
  };
  try {
    socket.send(JSON.stringify({ action, data }));
  } catch (err) {
    // テス
    console.log(err);
  }
};

export const requestTaskDelete = (
  socket: WebSocket,
  dispatch: Dispatch,
  token: string,
  taskId: string
) => {
  const action = 'sendmessage';
  const role = 'task_delete';
  const data = {
    role,
    token,
    taskId,
  };
  socket.send(JSON.stringify({ action, data }));
  dispatch(ActionTask.deleteTask(taskId));
};
