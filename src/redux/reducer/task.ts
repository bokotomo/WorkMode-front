import { reducerWithInitialState } from '../../../node_modules/typescript-fsa-reducers';
import { ActionTask } from '../actions/task';
import { TaskCard } from '../../types/taskBoard';
import { taskTodos, taskInProgresses, taskDones } from '../../mock/tasks';

export interface StateTask {
  readonly todos: TaskCard[];
  readonly inProgresses: TaskCard[];
  readonly dones: TaskCard[];
  readonly selectedTask: TaskCard;
}

export const initialStateTask: StateTask = {
  todos: [],
  inProgresses: [],
  dones: [],
  selectedTask: {
    id: '',
    title: '',
    detail: '',
    status: '',
    time: 0,
    createdAt: new Date(),
  },
};

export const ReducerTask = reducerWithInitialState(initialStateTask)
  .case(ActionTask.setTask, (state) => {
    return {
      ...state,
      todos: taskTodos,
      inProgresses: taskInProgresses,
      dones: taskDones,
    };
  })
  .case(ActionTask.setTaskTodo, (state, todos) => {
    return { ...state, todos };
  })
  .case(ActionTask.addTaskTodo, (state, todo) => {
    return { ...state, todos: [...state.todos, todo] };
  })
  .case(ActionTask.setTaskInProgresses, (state, inProgresses) => {
    return { ...state, inProgresses };
  })
  .case(ActionTask.setTaskDone, (state, dones) => {
    return { ...state, dones };
  })
  .case(ActionTask.setSelectedTask, (state, task) => {
    return { ...state, selectedTask: task };
  })
  .case(ActionTask.deleteTask, (state, taskId) => {
    const todos = state.todos.filter((task) => task.id !== taskId);
    const inProgresses = state.inProgresses.filter(
      (task) => task.id !== taskId
    );
    const dones = state.dones.filter((task) => task.id !== taskId);
    return { ...state, todos, inProgresses, dones };
  });
