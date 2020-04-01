import React from 'react'
import { MessageLineBar } from '../atom/MessageLineBar';
import messages from '../../mock/messages';

interface OwnProps { }

const style = {
    display: "flex",
    padding: 15,
};

type Props = OwnProps
export const MessageTaskProgress: React.FC<Props> = props => {
    var texts: any[] = [];
    messages.forEach(message => {
        texts.push(
            <div>
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
                            } >{message.userName}</span> {message.time}
                        </div>
                        <div>
                            {message.title}
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
        );
    });

    return (
        <div style={{
            overflowY: "scroll",
            flex: "0 1 100%",
        }}>
            {texts}
        </div>
    )
}