import React from 'react';
import { style, hover, color } from '@/css/style';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconTapioka } from '@/components/svg/IconTapioka';

interface Props {
  readonly socket: WebSocket;
  readonly handleOnModalOpend: Function;
  readonly openedModalName: string;
}
export const ModalSendReaction: React.FC<Props> = (props) => {
  const css = {
    modal: {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#192A46',
        border: 'none',
        color: color.white,
        width: '50%',
        cursor: 'auto',
        boxShadow: '0px 0px 6px #0000005c',
      },
    },
    titleArea: style({
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 600,
    }),
    times: style({
      ...hover.icon,
      fontSize: 22,
      cursor: 'pointer',
    }),
    button: {
      ok: style({
        ...hover.button,
        marginTop: 20,
        fontSize: 18,
        color: color.white,
        background: color.buttonOK,
        borderRadius: 50,
        border: 'none',
        width: '100%',
        textAlign: 'center',
        height: 40,
        lineHeight: '40px',
        boxSizing: 'border-box',
        cursor: 'pointer',
      }),
    },
  };

  const closeModal = () => {
    props.handleOnModalOpend('');
  };

  return (
    <Modal
      isOpen={props.openedModalName === 'sendReaction'}
      onRequestClose={closeModal}
      style={css.modal}
      overlayClassName="modalOverLayWrapper"
      contentLabel="モーダル"
    >
      <div className={css.titleArea}>
        <div>何を送りますか？</div>
        <FontAwesomeIcon
          className={css.times}
          onClick={closeModal}
          icon="times"
        />
      </div>
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            border: '1px solid #916440',
            borderRadius: '10px',
            flex: '0 1 23%',
            height: 80,
          }}
        >
          <div>Coffee</div>
          <div>残り: 11</div>
          <IconTapioka width={30} height={30} />
        </div>

        <div
          style={{
            border: '1px solid #916440',
            borderRadius: '10px',
            flex: '0 1 23%',
            height: 80,
          }}
        >
          <div>Coffee</div>
          <div>残り: 11</div>
          <IconTapioka width={30} height={30} />
        </div>

        <div
          style={{
            border: '1px solid #916440',
            borderRadius: '10px',
            flex: '0 1 23%',
            height: 80,
          }}
        >
          <div>Coffee</div>
          <div>残り: 11</div>
          <IconTapioka width={30} height={30} />
        </div>

        <div
          style={{
            border: '1px solid #916440',
            borderRadius: '10px',
            flex: '0 1 23%',
            height: 80,
          }}
        >
          <div>Coffee</div>
          <div>残り: 11</div>
          <IconTapioka width={30} height={30} />
        </div>
      </div>
    </Modal>
  );
};
