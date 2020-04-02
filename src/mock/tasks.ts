import { TaskCard } from '../types/taskBoard';

export const taskTodos: TaskCard[] = [
    {
        title: "APIをGRPCにするべきかの調査",
        detail: "詳細",
        status: "todo",
        time: 1,
        createdAt: new Date("2019/01/01 12:11:00"),
    },
    {
        title: "APIの基板の作成",
        detail: "詳細",
        status: "todo",
        time: 3,
        createdAt: new Date("2019/01/01 12:21:00"),
    },
];
export const taskInprogresses: TaskCard[] = [
    {
        title: "APIでタスクの追加",
        detail: "詳細",
        status: "run",
        time: 4,
        createdAt: new Date("2019/01/01 12:31:00"),
    },
];
export const taskDones: TaskCard[] = [
    {
        title: "APIでタスクの状態更新",
        detail: "詳細",
        status: "done",
        time: 2,
        createdAt: new Date("2019/01/01 12:41:00"),
    },
];