import React from 'react';
import { style } from '@/css/style';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  readonly handleOnModalOpend: Function;
  readonly openedModalName: string;
}
export const ModalDoneTask: React.FC<Props> = (props) => {
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

  function closeModal() {
    props.handleOnModalOpend('');
  }

  return (
    <Modal
      isOpen={props.openedModalName === 'done'}
      onRequestClose={closeModal}
      style={css.modal}
      overlayClassName="modalOverLayWrapper"
      contentLabel="モーダル"
    >
      <button type="button" onClick={closeModal}>
        <FontAwesomeIcon icon="times" />
      </button>
      <div>タイトル</div>
      <button type="button" className={css.buttonOK} onClick={closeModal}>
        完了
      </button>
      <button type="button" className={css.buttonNO} onClick={closeModal}>
        キャンセル
      </button>
    </Modal>
  );
};