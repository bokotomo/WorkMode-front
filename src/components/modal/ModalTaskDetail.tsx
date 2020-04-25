import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskCard } from '@/types/taskBoard';

interface Props {
  readonly handleOnModalOpend: Function;
  readonly deleteTask: Function;
  readonly openedModalName: string;
  readonly selectedTask: TaskCard;
  readonly socket: WebSocket;
}
export const ModalTaskDetail: React.FC<Props> = (props) => {
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

  function closeModal() {
    props.handleOnModalOpend('');
  }

  function deleteTask() {
    const isYes = window.confirm('削除しても宜しいですか？');
    if (isYes) {
      props.deleteTask(props.socket, props.selectedTask.id);
      closeModal();
    }
  }

  function editTask() {
    alert('編集モードへ切り替え');
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
        {getDetail(props.selectedTask.detail)}
      </div>
      <div style={{ marginTop: 20 }}>予定時間 {props.selectedTask.time}h</div>
      <div style={{ marginTop: 20 }}>開始時間 11:25</div>

      <button
        type="button"
        onClick={editTask}
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
        編集
      </button>
      <button
        type="button"
        onClick={deleteTask}
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
        削除
      </button>
    </Modal>
  );
};
