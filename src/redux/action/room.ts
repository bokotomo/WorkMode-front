import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionRoom = {
  setRoom: actionCreator('ROOM_SET'),
};
