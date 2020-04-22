import React from 'react';
import { TaskCard } from '../../types/taskBoard';

interface Props {
  readonly task: TaskCard;
  readonly handleOnModalOpend: Function;
  readonly handleOnSetSelectedTask: Function;
}
export const Card: React.FC<Props> = (props) => {
  const style = {
    card: {
      background: '#2A3B57',
      padding: '15px 10px',
      borderRadius: '10px',
      cursor: 'pointer',
      boxShadow: '0px -1px 8px #00000036',
      marginBottom: 15,
      fontSize: 15,
    },
    title: {
      fontWeight: 600,
    },
    time: {
      color: '#8495A8',
    },
  };
  function openDetail() {
    props.handleOnSetSelectedTask(props.task);
    props.handleOnModalOpend('detail');
  }
  return (
    <div style={style.card}>
      <div onClick={openDetail} style={style.title}>
        {props.task.title}
      </div>
      <div style={style.time}>{props.task.time}h</div>
    </div>
  );
};
