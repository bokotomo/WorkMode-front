import { TaskCard } from '@/types/taskBoard';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionTask = {
  setTaskTodo: actionCreator<TaskCard[]>('SET_TASK_TODO'),
  addTaskTodo: actionCreator<TaskCard>('ADD_TASK_DONE'),
  setTaskInProgresses: actionCreator<TaskCard[]>('SET_TASK_INPROGRESSES'),
  setTaskDone: actionCreator<TaskCard[]>('SET_TASK_DONE'),
  setSelectedTask: actionCreator<TaskCard>('SET_SELECTED_TASK'),
  deleteTask: actionCreator<string>('DELETE_TASK'),
  updateTask: actionCreator<TaskCard>('UPDATE_TASK'),

  requestTaskCreate: actionCreator<TaskCard>('REQUEST_TASK_CREATE'),
  requestTaskDelete: actionCreator<string>('REQUEST_TASK_DELETE'),
  requestTaskUpdate: actionCreator<TaskCard>('REQUEST_TASK_UPDATE'),
  requestTaskUpdateStatus: actionCreator<TaskCard>(
    'REQUEST_TASK_UPDATE_STATUS'
  ),
};
