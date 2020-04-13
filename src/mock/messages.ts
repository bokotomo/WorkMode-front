import { Message } from '../types/message';

export const mockMessages: Message[] = [
    {
        id: '1',
        userName: 'tomo',
        userColor: '#1B7B89',
        text: 'railsのAPI作成',
        progress: 20,
        status: 'done',
        createdAt: new Date('2019/01/01 12:00:00'),
    },
    {
        id: '2',
        userName: 'oakfreojare',
        userColor: '#34D05E',
        text: 'railsのAPIのデプロイ',
        progress: 40,
        status: 'run',
        createdAt: new Date('2019/01/01 12:00:00'),
    },
    {
        id: '3',
        userName: '山田太郎',
        userColor: '#8A29AD',
        text: 'EC2の環境設定',
        progress: 70,
        status: 'done',
        createdAt: new Date('2019/01/01 12:00:00'),
    },
    {
        id: '4',
        userName: '山田太郎',
        userColor: '#8A29AD',
        text: 'EC2へ自動デプロイ',
        progress: 70,
        status: 'done',
        createdAt: new Date('2019/01/01 12:00:00'),
    },
    {
        id: '5',
        userName: '山田太郎',
        userColor: '#8A29AD',
        text: 'APIの調査',
        progress: 70,
        status: 'done',
        createdAt: new Date('2019/01/01 12:00:00'),
    },
    {
        id: '6',
        userName: '山田太郎',
        userColor: '#8A29AD',
        text: 'nodeでAPI作成',
        progress: 70,
        status: 'run',
        createdAt: new Date('2019/01/01 12:00:00'),
    },
    {
        id: '7',
        userName: 'まっつー',
        userColor: '#D3402E',
        text: 'vueの基板作成',
        progress: 70,
        status: 'run',
        createdAt: new Date('2019/01/01 12:00:00'),
    },
    {
        id: '8',
        userName: 'tomo',
        userColor: '#1B7B89',
        text: 'フロントでプロトタイプ作成',
        progress: 70,
        status: 'run',
        createdAt: new Date('2019/01/01 12:00:00'),
    },
    {
        id: '9',
        userName: '山田太郎',
        userColor: '#8A29AD',
        text: '全てのタスクを完了させました！おめでとうございます！',
        progress: 100,
        status: 'alldone',
        createdAt: new Date('2019/01/02 12:00:00'),
    },
];