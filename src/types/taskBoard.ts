export interface TaskCard {
  readonly id: string;
  readonly title: string;
  readonly detail: string;
  readonly status: string;
  readonly time: number;
  readonly createdAt: Date;
}
