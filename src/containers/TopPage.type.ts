import { TaskCard } from '../types/taskBoard';
import { MessageProgress } from '../types/messageProgress';

export interface TopPageHandler {
  setWebSocket(): void;
  handleOnModalOpend(openedModalName: string): void;
  handleOnSetTask(): void;
  handleOnSetTaskTodo(tasks: TaskCard[]): void;
  handleOnSetTaskInProgresses(tasks: TaskCard[]): void;
  handleOnSetTaskDone(tasks: TaskCard[]): void;
  handleOnSetSelectedTask(task: TaskCard): void;
  handleOnAddTaskTodo(socket: WebSocket, task: TaskCard): void;
  updateTaskStatus(socket: WebSocket, taskId: string, status: string): void;
  handleOnSetMessage(): void;
  handleOnAddMessage(message: MessageProgress): void;
  handleOnSetRoom(): void;
  registerUser(socket: WebSocket, name: string): void;
  deleteTask(socket: WebSocket, taskId: string): void;
}
