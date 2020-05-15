export interface TaskCard {
  readonly id: string;
  readonly title: string;
  readonly detail: string;
  readonly status: string;
  readonly time: number;
  readonly createdAt: Date | string;
  readonly startTime: Date | string;
}

export interface ResponseTaskCard {
  readonly id: string;
  readonly title: string;
  readonly detail: string;
  readonly status: string;
  readonly time: number;
  readonly createdAt: string;
  readonly startTime: string;
}
