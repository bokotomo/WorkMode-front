export interface Message {
  readonly id: string;
  readonly userId: string;
  readonly userName: string;
  readonly userColor: string;
  readonly text: string;
  readonly progress: number;
  readonly status: string;
  readonly createdAt: Date;
}
