import React from 'react';
import { ActiveUser } from '@/types/activeUser';
import { Room } from '@/types/room';
import { Message } from '@/types/message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MessageLineBar } from '@/components/atom/MessageLineBar';
import { MessageUserList } from '@/components/molecules/MessageUserList';
import { MessageTaskProgress } from '@/components/molecules/MessageTaskProgress';

interface Props {
  readonly messages: Message[];
  readonly activeUsers: ActiveUser[];
  readonly rooms: Room[];
}
export const MessageBoard: React.FC<Props> = (props) => {
  const style = {
    flex: '0 1 45%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    background: '#1C2D3F',
  };
  const style2 = {
    display: 'flex',
    height: 40,
    padding: '20px 20px',
  };
  const styleRoom = {
    background: 'linear-gradient(125deg, #66B7FF, #0052de)',
    borderRadius: '5px',
    fontWeight: 800,
  };
  // const styleRoomCreateWrapper = {
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  // }
  // const styleRoomCreate = {
  //     display: 'flex',
  //     background: 'linear-gradient(125deg, #66B7FF, #0052de)',
  //     width: '30px',
  //     height: '30px',
  //     marginLeft: '10px',
  //     borderRadius: '100px',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     cursor: 'pointer',
  // };

  return (
    <div style={style}>
      <div style={style2}>
        <div style={styleRoom}>
          <div style={{ position: 'relative' }}>
            <FontAwesomeIcon
              icon="caret-down"
              style={{ position: 'absolute', right: 10, top: 8 }}
            />
            <select
              style={{
                WebkitAppearance: 'none',
                backgroundImage: 'none',
                background: 'none',
                border: 'none',
                width: '100%',
                height: '100%',
                color: 'white',
                cursor: 'pointer',
                padding: '7px 30px 7px 20px',
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              {props.rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 一時的に消す
                <div style={styleRoomCreateWrapper}>
                    <div style={styleRoomCreate}>
                        <FontAwesomeIcon icon='plus' />
                    </div>
                </div>

                <div style={{
                    cursor: 'pointer',
                    fontSize: 26,
                    color: '#f9c929',
                    marginLeft: 10,
                }}>
                    <FontAwesomeIcon icon='moon' />
                </div>
                */}
      </div>
      <MessageLineBar />
      <MessageUserList activeUsers={props.activeUsers} />
      <MessageTaskProgress messages={props.messages} />
    </div>
  );
};
