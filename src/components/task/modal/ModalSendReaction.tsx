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
        width: '45%',
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
    reaction: {
      item: style({
        borderRadius: '15px',
        flex: '0 1 23%',
        marginBottom: 20,
        padding: 1,
        textAlign: 'center',
        background: '#916440',
        cursor: 'pointer',
        color: '#FDE6D2',
        fontSize: 18,
        $nest: {
          '&:hover': {
            background: 'linear-gradient(125deg, #F1CA7F, #FE8B5C)',
            color: '#FFCB9E',
          },
        },
      }),
      itemInner: style({
        borderRadius: '15px',
        padding: '20px 0',
        background: '#192A46',
      }),
    },
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
  const reactions = [
    {
      id: '1',
      name: 'coffee',
      havednumber: 10,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '2',
      name: 'beer',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '3',
      name: 'beer',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '4',
      name: 'beer',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '5',
      name: 'beer',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '6',
      name: 'beer',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '7',
      name: 'beer',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '8',
      name: 'beer',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
  ];

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
          flexWrap: 'wrap',
          padding: '0 20px',
        }}
      >
        {reactions.map((reaction) => (
          <div className={css.reaction.item}>
            <div className={css.reaction.itemInner}>
              {reaction.icon(100, 100)}
              <div>{reaction.name}</div>
              <div>残り: {reaction.havednumber}</div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};
