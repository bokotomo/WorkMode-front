import { TaskCard } from '@/types/taskBoard';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionTask = {
  setTodo: actionCreator<TaskCard[]>('TASK_SET_TODO'),
  addTodo: actionCreator<TaskCard>('TASK_ADD_TODO'),
  setInProgresses: actionCreator<TaskCard[]>('TASK_SET_INPROGRESSES'),
  setDone: actionCreator<TaskCard[]>('TASK_SET_DONE'),
  setSelectedTask: actionCreator<TaskCard>('TASK_SET_SELECTED'),
  delete: actionCreator<string>('TASK_DELETE'),
  update: actionCreator<TaskCard>('TASK_UPDATE'),

  requestCreate: actionCreator<TaskCard>('TASK_REQUEST_CREATE'),
  requestDelete: actionCreator<string>('TASK_REQUEST_DELETE'),
  requestUpdate: actionCreator<TaskCard>('TASK_REQUEST_UPDATE'),
  requestUpdateStatus: actionCreator<TaskCard>('TASK_REQUEST_UPDATE_STATUS'),
};
