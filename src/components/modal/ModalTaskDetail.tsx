import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskCard } from '@/types/taskBoard';

interface Props {
  readonly handleOnModalOpend: Function;
  readonly deleteTask: Function;
  readonly updateTask: Function;
  readonly openedModalName: string;
  readonly selectedTask: TaskCard;
  readonly socket: WebSocket;
}
export const ModalTaskDetail: React.FC<Props> = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  let detail = props.selectedTask.detail as string;
  let time = props.selectedTask.time as number;
  const customStyles = {
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
  };

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

  const editButtonText = () => {
    if (isEditMode) return <>保存</>;
    return <>編集</>;
  };

  function closeModal() {
    props.handleOnModalOpend('');
  }

  function handleChangeDetail(e: React.ChangeEvent<HTMLTextAreaElement>) {
    detail = e.target.value;
  }

  function handleHourChange(e: React.ChangeEvent<HTMLInputElement>) {
    time = Number(e.target.value);
  }

  function deleteTask() {
    const isYes = window.confirm('削除しても宜しいですか？');
    if (isYes) {
      props.deleteTask(props.socket, props.selectedTask.id);
      closeModal();
    }
  }

  function noButton() {
    if (isEditMode) {
      setIsEditMode(false);
      return;
    }
    deleteTask();
  }

  function okButton() {
    if (!isEditMode) {
      setIsEditMode(true);
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

    setIsEditMode(false);
    closeModal();
  }

  return (
    <Modal
      isOpen={props.openedModalName === 'detail'}
      onRequestClose={closeModal}
      style={customStyles}
      overlayClassName="modalOverLayWrapper"
      contentLabel="モーダル"
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: '#F0F6FC',
          fontWeight: 600,
        }}
      >
        <div>{props.selectedTask.title}</div>
        <FontAwesomeIcon
          style={{ fontSize: 22, cursor: 'pointer' }}
          onClick={closeModal}
          icon="times"
        />
      </div>
      <div style={{ marginTop: 20 }}>
        {isEditMode && (
          <textarea
            onChange={handleChangeDetail}
            style={{
              color: 'white',
              fontSize: 18,
              background: '#2B4D6C',
              width: '100%',
              borderRadius: 10,
              border: 'none',
              padding: '5px 15px',
              height: 120,
              boxSizing: 'border-box',
            }}
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
            style={{
              marginLeft: 10,
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
            }}
            placeholder="1"
            min={0.5}
            max={12}
            step={0.5}
            defaultValue={props.selectedTask.time}
          />
        )}
        {!isEditMode && ` ${props.selectedTask.time}h`}
      </div>
      <div style={{ marginTop: 20 }}>開始時間 11:25</div>

      <button
        type="button"
        onClick={okButton}
        style={{
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
        }}
      >
        {editButtonText()}
      </button>
      <button
        type="button"
        onClick={noButton}
        style={{
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
        }}
      >
        {!isEditMode && <>削除</>}
        {isEditMode && <>キャンセル</>}
      </button>
    </Modal>
  );
};
