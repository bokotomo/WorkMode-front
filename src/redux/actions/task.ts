import { actionCreatorFactory } from '../../../node_modules/typescript-fsa';
import { TaskCard } from '../../types/taskBoard';

const actionCreator = actionCreatorFactory();

export const ActionTask = {
  setTask: actionCreator('SET_TASK'),
  setTaskTodo: actionCreator<TaskCard[]>('SET_TASK_TODO'),
  addTaskTodo: actionCreator<TaskCard>('ADD_TASK_DONE'),
  setTaskInProgresses: actionCreator<TaskCard[]>('SET_TASK_INPROGRESSES'),
  setTaskDone: actionCreator<TaskCard[]>('SET_TASK_DONE'),
  setSelectedTask: actionCreator<TaskCard>('SET_SELECTED_TASK'),
  deleteTask: actionCreator<string>('DELETE_TASK'),
};
