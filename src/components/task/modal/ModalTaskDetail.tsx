import React, { useState } from 'react';
import { style, hover, color } from '@/css/style';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskCard } from '@/types/taskBoard';
import moment from 'moment';

interface Props {
  readonly handleOnModalOpend: Function;
  readonly deleteTask: Function;
  readonly updateTask: Function;
  readonly openedModalName: string;
  readonly selectedTask: TaskCard;
  readonly socket: WebSocket;
}
export const ModalTaskDetail: React.FC<Props> = (props) => {
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
    input: style({
      marginLeft: 10,
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
      no: style({
        ...hover.button,
        marginTop: 20,
        fontSize: 18,
        color: color.white,
        background: color.buttonNO,
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

  const [isEditMode, setIsEditMode] = useState(false);
  let detail = props.selectedTask.detail as string;
  let time = props.selectedTask.time as number;

  const getDetail = (text: string) => {
    return text.split('\n').map((p, index) => {
      const k = `${p}-${index}`;
      return (
        <React.Fragment key={k}>
          {p}
          <br />
        </React.Fragment>
      );
    });
  };

  const getStartTime = () => {
    if (typeof props.selectedTask.startTime === 'string') return <></>;
    return (
      <>開始時間 {moment(props.selectedTask.startTime).format('M/D HH:mm')}</>
    );
  };

  const editButtonText = () => {
    if (isEditMode) return <>保存</>;
    return <>編集</>;
  };

  const closeModal = () => {
    setIsEditMode(false);
    props.handleOnModalOpend('');
  };

  const handleChangeDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    detail = e.target.value;
  };

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    time = Number(e.target.value);
  };

  const deleteTask = () => {
    const isYes = window.confirm('削除しても宜しいですか？');
    if (!isYes) return;
    props.deleteTask(props.socket, props.selectedTask.id);
    closeModal();
  };

  const noButton = () => {
    if (isEditMode) {
      setIsEditMode(false);
      return;
    }
    deleteTask();
  };

  const okButton = () => {
    if (!isEditMode) {
      setIsEditMode(true);
      return;
    }
    if (detail === '' || time === 0) {
      alert('全て入力する必要があります。');
      return;
    }

    const isChangedTask =
      detail !== props.selectedTask.detail || time !== props.selectedTask.time;
    if (isChangedTask)
      props.updateTask(props.socket, {
        id: props.selectedTask.id,
        detail,
        time,
      });

    closeModal();
  };

  return (
    <Modal
      isOpen={props.openedModalName === 'detail'}
      onRequestClose={closeModal}
      style={css.modal}
      overlayClassName="modalOverLayWrapper"
      contentLabel="モーダル"
    >
      <div className={css.titleArea}>
        <div>{props.selectedTask.title}</div>
        <FontAwesomeIcon
          className={css.times}
          onClick={closeModal}
          icon="times"
        />
      </div>

      <div style={{ marginTop: 20 }}>
        {isEditMode && (
          <textarea
            onChange={handleChangeDetail}
            className={css.textarea}
            placeholder="詳細を書きます。"
            maxLength={200}
            defaultValue={props.selectedTask.detail}
          />
        )}
        {!isEditMode && getDetail(props.selectedTask.detail)}
      </div>

      <div style={{ marginTop: 20 }}>
        予定時間
        {isEditMode && (
          <input
            type="number"
            onChange={handleHourChange}
            className={css.input}
            placeholder="1"
            min={0.5}
            max={12}
            step={0.5}
            defaultValue={props.selectedTask.time}
          />
        )}
        {!isEditMode && ` ${props.selectedTask.time}h`}
      </div>

      <div style={{ marginTop: 20 }}>{getStartTime()}</div>

      <button type="button" onClick={okButton} className={css.button.ok}>
        {editButtonText()}
      </button>

      <button type="button" onClick={noButton} className={css.button.no}>
        {!isEditMode && <>削除</>}
        {isEditMode && <>キャンセル</>}
      </button>
    </Modal>
  );
};
