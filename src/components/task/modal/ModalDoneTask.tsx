import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionModal } from '@/redux/action/modal';
import { AppState } from '@/redux/reducer';
import { style } from '@/css/style';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {}
export const ModalDoneTask: React.FC<Props> = (props) => {
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
        color: 'white',
        cursor: 'auto',
        border: 'none',
        boxShadow: '0px 0px 6px #0000005c',
      },
    },
    buttonOK: style({
      marginTop: 20,
      fontSize: 18,
      color: 'white',
      background: 'linear-gradient(125deg, #66B7FF, #0052de)',
      borderRadius: 50,
      border: 'none',
      width: '100%',
      textAlign: 'center',
      height: 40,
      lineHeight: '40px',
      boxSizing: 'border-box',
      cursor: 'pointer',
    }),
    buttonNO: style({
      marginTop: 20,
      fontSize: 18,
      color: 'white',
      background: '#4C6276',
      borderRadius: 50,
      border: 'none',
      width: '100%',
      textAlign: 'center',
      height: 40,
      lineHeight: '40px',
      boxSizing: 'border-box',
      cursor: 'pointer',
    }),
  };

  const onCloseModal = () => dispatch(ActionModal.updateModalOpened(''));

  return (
    <Modal
      isOpen={openedModalName === 'done'}
      onRequestClose={onCloseModal}
      style={css.modal}
      overlayClassName="modalOverLayWrapper"
      contentLabel="モーダル"
    >
      <button type="button" onClick={onCloseModal}>
        <FontAwesomeIcon icon="times" />
      </button>
      <div>タイトル</div>
      <button type="button" className={css.buttonOK} onClick={onCloseModal}>
        完了
      </button>
      <button type="button" className={css.buttonNO} onClick={onCloseModal}>
        キャンセル
      </button>
    </Modal>
  );
};
