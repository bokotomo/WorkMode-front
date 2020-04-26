import React from 'react';
import { style } from 'typestyle';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  readonly socket: WebSocket;
  readonly handleOnModalOpend: Function;
  readonly handleOnAddTaskTodo: Function;
  readonly openedModalName: string;
}
export const ModalAddTask: React.FC<Props> = (props) => {
  let title = '';
  let detail = '';
  let time = 0;
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
        width: '60%',
        border: 'none',
        cursor: 'auto',
        boxShadow: '0px 0px 6px #0000005c',
      },
    },
    titleArea: style({
      display: 'flex',
      justifyContent: 'space-between',
      color: '#F0F6FC',
      fontWeight: 600,
    }),
    times: style({ fontSize: 22, cursor: 'pointer' }),
    inputTitle: style({
      color: 'white',
      fontSize: 18,
      background: '#2B4D6C',
      borderRadius: 20,
      border: 'none',
      padding: '5px 15px',
      width: '100%',
      height: 40,
      lineHeight: '40px',
      boxSizing: 'border-box',
    }),
    textarea: style({
      color: 'white',
      fontSize: 18,
      background: '#2B4D6C',
      width: '100%',
      borderRadius: 10,
      border: 'none',
      padding: '5px 15px',
      height: 120,
      boxSizing: 'border-box',
    }),
    time: style({
      color: 'white',
      fontSize: 18,
      background: '#2B4D6C',
      borderRadius: 20,
      border: 'none',
      padding: '5px 15px',
      width: 100,
      height: 40,
      lineHeight: '40px',
      boxSizing: 'border-box',
    }),
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
  };

  function closeModal() {
    props.handleOnModalOpend('');
  }

  function addTask() {
    if (title === '' || detail === '' || time === 0) {
      alert('全て入力する必要があります。');
      return;
    }
    props.handleOnAddTaskTodo(props.socket, {
      id: '',
      title,
      detail,
      status: 'todo',
      time,
      createdAt: new Date(),
    });
    closeModal();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    title = e.target.value;
  }

  function handleChangeDetail(e: React.ChangeEvent<HTMLTextAreaElement>) {
    detail = e.target.value;
  }

  function handleHourChange(e: React.ChangeEvent<HTMLInputElement>) {
    const timeTmp = Number(e.target.value);
    time = timeTmp;
  }

  return (
    <Modal
      isOpen={props.openedModalName === 'add'}
      onRequestClose={closeModal}
      style={css.modal}
      overlayClassName="modalOverLayWrapper"
      contentLabel="モーダル"
    >
      <div className={css.titleArea}>
        <div>タスクを追加</div>
        <FontAwesomeIcon
          className={css.times}
          onClick={closeModal}
          icon="times"
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <input
          onChange={handleChange}
          className={css.inputTitle}
          placeholder="わかりやすいタスク名"
          maxLength={25}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <textarea
          onChange={handleChangeDetail}
          className={css.textarea}
          placeholder="詳細を書きます。"
          maxLength={200}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        予定時間：
        <input
          type="number"
          onChange={handleHourChange}
          className={css.time}
          placeholder="1"
          min={0.5}
          max={12}
          step={0.5}
        />
      </div>

      <button type="button" className={css.buttonOK} onClick={addTask}>
        追加
      </button>
    </Modal>
  );
};
