import { TaskCard, ResponseTaskCard } from '@/types/taskBoard';
import moment from 'moment';

export const adapterTask = (item: ResponseTaskCard) => {
  let createdAt: Date | string;
  let startTime: Date | string;
  if (item.createdAt === '-') {
    createdAt = item.createdAt;
  } else {
    createdAt = moment(item.createdAt, 'YYYY/MM/DD HH:mm:ss').toDate();
  }
  if (item.startTime === '-') {
    startTime = item.startTime;
  } else {
    startTime = moment(item.startTime, 'YYYY/MM/DD HH:mm:ss').toDate();
  }
  return {
    id: item.id,
    title: item.title,
    detail: item.detail,
    status: item.status,
    time: item.time,
    createdAt,
    startTime,
  } as TaskCard;
};
