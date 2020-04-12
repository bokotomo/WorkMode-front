import { reducerWithInitialState } from '../../../node_modules/typescript-fsa-reducers';
import { Room } from '../../types/room';
import { ActionRoom } from '../actions/room';
import { mockRooms } from '../../mock/rooms';

export interface StateRoom {
    rooms: Room[]
}

export const initialState: StateRoom = {
    rooms: [],
}

export const ReducerRoom = reducerWithInitialState(initialState)
    .case(ActionRoom.setRoom, (state) => {
        return { ...state, rooms: mockRooms }
    })