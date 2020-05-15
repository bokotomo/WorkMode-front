import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionModal } from '@/redux/action/modal';
import { AppState } from '@/redux/reducer';
import { style, hover, color } from '@/css/style';
import { TaskCard } from '@/types/taskBoard';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  addTaskTodo(task: TaskCard): void;
}
export const ModalAddTask: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const openedModalName = useSelector(
    (state: AppState) => state.modal.openedModalName
  );
  // ↑ 「useSelector, useDispatch」は、「stateと関数」が各ポーネントに隠れるのが良くも悪くも特徴。
  // reduxにアクセスするロジックは、コンポーネントから分離と親コンポーネントに依存させたい。

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
  const [title, setTitle] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [time, setTime] = useState<number>(0);

  const closeModal = () => dispatch(ActionModal.updateModalOpened(''));

  const onCloseModal = () => closeModal();

  const onAddTask = () => {
    if (title === '' || detail === '' || time === 0) {
      alert('全て入力する必要があります。');
      return;
    }
    props.addTaskTodo({
      id: '',
      title,
      detail,
      status: 'todo',
      time,
      createdAt: new Date(),
    } as TaskCard);
    closeModal();
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const onChangeDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDetail(e.target.value);

  const onChangeHour = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTime(Number(e.target.value));

  return (
    <Modal
      isOpen={openedModalName === 'add'}
      onRequestClose={onCloseModal}
      style={css.modal}
      overlayClassName="modalOverLayWrapper"
      contentLabel="モーダル"
    >
      <div className={css.titleArea}>
        <div>タスクを追加</div>
        <FontAwesomeIcon
          className={css.times}
          onClick={onCloseModal}
          icon="times"
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <input
          onChange={onChangeTitle}
          className={css.inputTitle}
          placeholder="わかりやすいタスク名"
          maxLength={25}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <textarea
          onChange={onChangeDetail}
          className={css.textarea}
          placeholder="詳細を書きます。"
          maxLength={200}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        予定時間：
        <input
          type="number"
          onChange={onChangeHour}
          className={css.time}
          placeholder="1"
          min={0.5}
          max={12}
          step={0.5}
        />
      </div>

      <button type="button" className={css.button.ok} onClick={onAddTask}>
        追加
      </button>
    </Modal>
  );
};
