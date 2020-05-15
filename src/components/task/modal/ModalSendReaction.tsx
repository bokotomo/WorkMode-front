import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionModal } from '@/redux/action/modal';
import { AppState } from '@/redux/reducer';
import { style, hover, color } from '@/css/style';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconTapioka } from '@/components/svg/IconTapioka';

interface Props {}
export const ModalSendReaction: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const openedModalName = useSelector(
    (state: AppState) => state.modal.openedModalName
  );
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
      wrapper: style({
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '0 20px',
      }),
      item: style({
        borderRadius: '15px',
        flex: '0 1 23%',
        marginBottom: 20,
        padding: 2,
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
      name: style({ fontSize: 22 }),
      havedNumber: style({ fontSize: 16 }),
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
      name: 'Coffee',
      havednumber: 10,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '2',
      name: 'Beer',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '3',
      name: 'Good',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '4',
      name: 'Love',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '5',
      name: 'Wine',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '6',
      name: 'Tapioka',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '7',
      name: 'Cake',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
    {
      id: '8',
      name: 'Cat',
      havednumber: 6,
      icon: (width: number, height: number) => (
        <IconTapioka width={width} height={height} />
      ),
    },
  ];

  const onCloseModal = () => dispatch(ActionModal.updateModalOpened(''));

  return (
    <Modal
      isOpen={openedModalName === 'sendReaction'}
      onRequestClose={onCloseModal}
      style={css.modal}
      overlayClassName="modalOverLayWrapper"
      contentLabel="モーダル"
    >
      <div className={css.titleArea}>
        <div>何を送りますか？</div>
        <FontAwesomeIcon
          className={css.times}
          onClick={onCloseModal}
          icon="times"
        />
      </div>
      <div className={css.reaction.wrapper}>
        {reactions.map((reaction) => (
          <button key={reaction.id} type="button" className={css.reaction.item}>
            <div className={css.reaction.itemInner}>
              {reaction.icon(90, 90)}
              <div className={css.reaction.name}>{reaction.name}</div>
              <div className={css.reaction.havedNumber}>
                残り: {reaction.havednumber}
              </div>
            </div>
          </button>
        ))}
      </div>
    </Modal>
  );
};
