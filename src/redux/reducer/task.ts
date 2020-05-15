import { ActionTask } from '@/redux/action/task';
import { TaskCard } from '@/types/taskBoard';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

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
    startTime: new Date(),
  },
};

export const ReducerTask = reducerWithInitialState(initialStateTask)
  .case(ActionTask.setTodo, (state, todos) => {
    return { ...state, todos };
  })
  .case(ActionTask.addTodo, (state, todo) => {
    return { ...state, todos: [...state.todos, todo] };
  })
  .case(ActionTask.setInProgresses, (state, inProgresses) => {
    return { ...state, inProgresses };
  })
  .case(ActionTask.setDone, (state, dones) => {
    return { ...state, dones };
  })
  .case(ActionTask.setSelectedTask, (state, task) => {
    return { ...state, selectedTask: task };
  })
  .case(ActionTask.delete, (state, taskId) => {
    const todos = state.todos.filter((task) => task.id !== taskId);
    const inProgresses = state.inProgresses.filter(
      (task) => task.id !== taskId
    );
    const dones = state.dones.filter((task) => task.id !== taskId);
    return { ...state, todos, inProgresses, dones };
  })
  .case(ActionTask.update, (state, task) => {
    const todos = state.todos.map((item) => {
      if (item.id !== task.id) return item;
      return {
        ...item,
        detail: task.detail,
        time: task.time,
      };
    });
    const inProgresses = state.inProgresses.map((item) => {
      if (item.id !== task.id) return item;
      return {
        ...item,
        detail: task.detail,
        time: task.time,
      };
    });
    const dones = state.dones.map((item) => {
      if (item.id !== task.id) return item;
      return {
        ...item,
        detail: task.detail,
        time: task.time,
      };
    });
    return { ...state, todos, inProgresses, dones };
  });
