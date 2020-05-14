import { Room } from '@/types/room';
import { ActionRoom } from '@/redux/actions/room';
import { mockRooms } from '@/mock/rooms';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface StateRoom {
  readonly rooms: Room[];
}

export const initialState: StateRoom = {
  rooms: [],
};

export const ReducerRoom = reducerWithInitialState(initialState).case(
  ActionRoom.setRoom,
  (state) => {
    return { ...state, rooms: mockRooms };
  }
);
