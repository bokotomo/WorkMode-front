import { TaskCard } from '../types/taskBoard';

export const taskTodos: TaskCard[] = [
    {
        id: "1",
        title: "APIをGRPCにするべきかの調査",
        detail: "詳細",
        status: "todo",
        time: 1,
        createdAt: new Date("2019/01/01 12:11:00"),
    },
    {
        id: "2",
        title: "APIの基板の作成",
        detail: "詳細",
        status: "todo",
        time: 3,
        createdAt: new Date("2019/01/01 12:21:00"),
    },
    {
        id: "3",
        title: "フロントからAPIを呼び出す",
        detail: "詳細",
        status: "todo",
        time: 3,
        createdAt: new Date("2019/01/01 12:21:00"),
    },
    {
        id: "4",
        title: "APIでタスクの状態更新",
        detail: "詳細",
        status: "todo",
        time: 2,
        createdAt: new Date("2019/01/01 12:41:00"),
    },
];
export const taskInprogresses: TaskCard[] = [
    {
        id: "5",
        title: "フロントでプロトタイプの作成",
        detail: "詳細",
        status: "run",
        time: 6,
        createdAt: new Date("2019/01/01 12:31:00"),
    },
];
export const taskDones: TaskCard[] = [
    {
        id: "6",
        title: "フロントの基板の作成",
        detail: "詳細",
        status: "done",
        time: 2,
        createdAt: new Date("2019/01/01 12:41:00"),
    },
];