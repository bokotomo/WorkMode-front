import React from 'react'
import { MessageLineBar } from '../atom/MessageLineBar';
import { ActiveUser } from '../../types/activeUser';

interface Props {
    activeUsers: ActiveUser[],
}
export const MessageUserList: React.FC<Props> = props => {
    return (
        <div>
            <div style={{
                display: 'flex',
            }}>
                {props.activeUsers.map(user =>
                    <div key={user.id} style={{
                        width: 80,
                        height: 80,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 13,
                    }}>
                        <div>
                            <div style={
                                {
                                    width: 40,
                                    height: 40,
                                    background: user.color,
                                    borderRadius: 40,
                                    margin: 'auto',
                                }
                            } />
                            <div style={{
                                width: 60,
                                marginTop: 5,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                textAlign: 'center',
                            }}>
                                {user.name}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <MessageLineBar />
        </div>
    )
}