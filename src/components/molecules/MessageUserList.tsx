import React from 'react'
import { MessageLineBar } from '../atom/MessageLineBar';
import users from '../../mock/users';

interface OwnProps { }

type Props = OwnProps
export const MessageUserList: React.FC<Props> = props => {
    var texts: any[] = [];
    users.forEach(user => {
        texts.push(
            <div style={{
                width: 80,
                height: 80,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 13,
            }}>
                <div>
                    <div style={
                        {
                            width: 40,
                            height: 40,
                            background: user.userColor,
                            borderRadius: 40,
                            margin: "auto",
                        }
                    } />
                    <div style={{
                        width: 60,
                        marginTop: 5,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                    }}>
                        {user.userName}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div style={{
                display: "flex",
            }}>
                {texts}
            </div>

            <MessageLineBar />
        </div>
    )
}