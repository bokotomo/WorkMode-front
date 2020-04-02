import React from 'react'
import { ActiveUser } from '../../types/activeUser';
import { Room } from '../../types/room';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MessageLineBar } from '../atom/MessageLineBar';
import { MessageUserList } from '../molecules/MessageUserList';
import { MessageTaskProgress } from '../molecules/MessageTaskProgress';
import { Message } from '../../types/message';

interface Props {
    messages: Message[],
    activeUsers: ActiveUser[],
    rooms: Room[],
}
export const MessageBoard: React.FC<Props> = props => {
    const style = {
        flex: "0 1 45%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-between",
        background: "#1C2D3F",
    };

    const style2 = {
        display: "flex",
        height: 40,
        padding: "20px 20px",
    };

    const styleRoom = {
        background: "linear-gradient(125deg, #66B7FF, #0052de)",
        padding: "7px 10px 7px 20px",
        borderRadius: "5px",
        fontWeight: 800,
    };

    const styleRoomCreateWrapper = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    const styleRoomCreate = {
        display: "flex",
        background: "linear-gradient(125deg, #66B7FF, #0052de)",
        width: "30px",
        height: "30px",
        marginLeft: "10px",
        borderRadius: "100px",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    };

    // const styleRoomButton = {
    //     cursor: "pointer",
    //     padding: "0px 10px",
    // }

    const styleSelect = {
        background: "none",
        width: "100%",
        height: "100%",
        border: "none",
        color: "white",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: 14,
    }

    return (
        <div style={style}>
            <div style={style2}>
                <div style={styleRoom}>
                    <select style={styleSelect}>
                        {props.rooms.map(room =>
                            <option value={room.id}>{room.name}</option>
                        )}
                    </select>
                    {/* <span style={styleRoomButton}>
                        <FontAwesomeIcon icon="caret-down" />
                    </span> */}
                </div>

                <div style={styleRoomCreateWrapper}>
                    <div style={styleRoomCreate}>
                        <FontAwesomeIcon icon="plus" />
                    </div>
                </div>

                <div style={{
                    cursor: "pointer",
                    fontSize: 26,
                    color: "#f9c929",
                    marginLeft: 10,
                }}>
                    <FontAwesomeIcon icon="moon" />
                </div>
            </div>
            <MessageLineBar />
            <MessageUserList activeUsers={props.activeUsers} />
            <MessageTaskProgress messages={props.messages} />
        </div>
    )
}