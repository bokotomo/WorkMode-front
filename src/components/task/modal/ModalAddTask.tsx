import React from 'react';
import { style, hover, color } from '@/css/style';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  readonly socket: WebSocket;
  readonly handleOnModalOpend: Function;
  readonly handleOnAddTaskTodo: Function;
  readonly openedModalName: string;
}
export const ModalAddTask: React.FC<Props> = (props) => {
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
        color: color.white,
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
    times: style({
      ...hover.icon,
      fontSize: 22,
      cursor: 'pointer',
    }),
    inputTitle: style({
      color: color.white,
      fontSize: 18,
      background: color.input,
      borderRadius: 20,
      border: 'none',
      padding: '5px 15px',
      width: '100%',
      height: 40,
      lineHeight: '40px',
      boxSizing: 'border-box',
    }),
    textarea: style({
      color: color.white,
      fontSize: 16,
      background: color.input,
      width: '100%',
      borderRadius: 10,
      border: 'none',
      padding: '12px 15px',
      height: 120,
      boxSizing: 'border-box',
    }),
    time: style({
      color: color.white,
      fontSize: 18,
      background: color.input,
      borderRadius: 20,
      border: 'none',
      padding: '5px 15px',
      width: 100,
      height: 40,
      lineHeight: '40px',
      boxSizing: 'border-box',
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
  let title = '';
  let detail = '';
  let time = 0;

  const closeModal = () => {
    props.handleOnModalOpend('');
  };

  const addTask = () => {
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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    title = e.target.value;
  };

  const handleChangeDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    detail = e.target.value;
  };

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const timeTmp = Number(e.target.value);
    time = timeTmp;
  };

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

      <button type="button" className={css.button.ok} onClick={addTask}>
        追加
      </button>
    </Modal>
  );
};
