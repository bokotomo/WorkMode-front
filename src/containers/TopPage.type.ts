import { TaskCard } from '@/types/taskBoard';

export interface TopPageHandler {
  setWebSocket(): void;
  handleOnModalOpend(openedModalName: string): void;
  handleOnSetTaskTodo(tasks: TaskCard[]): void;
  handleOnSetTaskInProgresses(tasks: TaskCard[]): void;
  handleOnSetTaskDone(tasks: TaskCard[]): void;
  handleOnSetSelectedTask(task: TaskCard): void;
  handleOnAddTaskTodo(socket: WebSocket, task: TaskCard): void;
  updateTaskStatus(socket: WebSocket, taskId: string, status: string): void;
  handleOnSetRoom(): void;
  registerUser(socket: WebSocket, name: string): void;
  deleteTask(socket: WebSocket, taskId: string): void;
}
