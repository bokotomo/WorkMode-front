import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { ActionModal } from '@/redux/action/modal';
import { style } from '@/css/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Message } from '@/types/message';
import { MessageLineBar } from '@/components/atom/MessageLineBar';
import { UserIconItemMessage } from '@/components/atom/UserIconItemMessage';

interface Props {
  readonly messages: Message[];
  readonly myId: string;
}
export const MessageTaskProgress: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const css = {
    message: {
      area: style({
        display: 'flex',
        padding: 15,
      }),
      userIcon: style({
        paddingRight: 15,
      }),
    },
    reaction: {
      area: style({
        display: 'flex',
        marginTop: 5,
      }),
      button: style({
        padding: '2px 10px',
        background: '#20435B',
        border: '1px solid #3E6A9B',
        borderRadius: '50px',
        fontSize: 12,
        color: 'white',
        cursor: 'pointer',
      }),
      icon: style({ opacity: 0.4 }),
    },
  };
  useEffect(() => {
    scrollBottom();
  });

  const scrollBottom = () => {
    const obj = document.getElementById('messageScrollArea');
    if (obj != null) obj.scrollTop = obj.scrollHeight;
  };

  const onClickReaction = () =>
    dispatch(ActionModal.updateModalOpened('sendReaction'));

  return (
    <div
      id="messageScrollArea"
      style={{
        overflowY: 'scroll',
        flex: '0 1 100%',
      }}
    >
      {props.messages.map((message) => (
        <div key={message.id}>
          <div className={css.message.area}>
            <div className={css.message.userIcon}>
              <UserIconItemMessage
                name={message.userName}
                color={message.userColor}
              />
            </div>

            <div>
              <div>
                <span
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  {message.userName}
                </span>{' '}
                {moment(message.createdAt).format('M月D日 H:mm')}
              </div>

              <div>
                {message.text}
                {message.status === 'done' && 'が完了しました。'}
                {message.status === 'inprogress' && 'を実行中。'}
                {message.status === 'alldone' && ''}
              </div>

              {message.userId !== props.myId && (
                <div className={css.reaction.area}>
                  <button
                    type="button"
                    onClick={onClickReaction}
                    className={css.reaction.button}
                  >
                    <FontAwesomeIcon
                      icon="plus"
                      className={css.reaction.icon}
                    />
                  </button>
                </div>
              )}
            </div>
          </div>

          <MessageLineBar />
        </div>
      ))}
    </div>
  );
};
