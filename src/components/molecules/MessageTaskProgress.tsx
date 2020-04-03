import React, { useEffect } from 'react'
import { MessageLineBar } from '../atom/MessageLineBar';
import { Message } from '../../types/message';
import moment from 'moment';

interface Props {
    messages: Message[]
}
export const MessageTaskProgress: React.FC<Props> = props => {
    useEffect(() => {
        scrollBottom()
    })

    function scrollBottom() {
        const obj = document.getElementById("messageScrollArea");
        if (obj != null) obj.scrollTop = obj.scrollHeight;
    }

    const style = {
        display: "flex",
        padding: 15,
    };
    return (
        <div id="messageScrollArea" style={{
            overflowY: "scroll",
            flex: "0 1 100%",
        }}>
            {props.messages.map(message =>
                <div key={message.text}>
                    <div style={style}>
                        <div style={
                            {
                                paddingRight: 15,
                            }
                        }>
                            <div style={
                                {
                                    width: 50,
                                    height: 50,
                                    background: message.userColor,
                                    borderRadius: 50,
                                    cursor: "pointer",
                                }
                            } />
                        </div>

                        <div>
                            <div>
                                <span style={
                                    {
                                        cursor: "pointer",
                                    }
                                } >{message.userName}</span> {
                                    moment(message.createdAt).format("M月D日 H:ss")
                                }
                            </div>
                            <div>
                                {message.text}
                                {message.status === "done" ? 'が完了しました。' : ''}
                                {message.status === "run" ? 'を実行中。' : ''}
                            </div>
                            <div>
                                進捗率 {message.progress}%
                            </div>
                        </div>
                    </div>

                    <MessageLineBar />
                </div >
            )}
        </div>
    )
}