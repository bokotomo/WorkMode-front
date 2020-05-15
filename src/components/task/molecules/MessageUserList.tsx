import React from 'react';
import { ActiveUser } from '@/types/activeUser';
import { MessageLineBar } from '@/components/atom/MessageLineBar';
import { UserIconItem } from '@/components/atom/UserIconItem';

interface Props {
  readonly activeUsers: ActiveUser[];
}
export const MessageUserList: React.FC<Props> = (props) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          height: 80,
        }}
      >
        {props.activeUsers.map((user) => (
          <div
            key={user.id}
            style={{
              width: 80,
              height: 80,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 13,
            }}
          >
            <div>
              <UserIconItem name={user.name} color={user.color} />
              <div
                style={{
                  width: 80,
                  marginTop: 5,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                }}
              >
                {user.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      <MessageLineBar />
    </div>
  );
};
