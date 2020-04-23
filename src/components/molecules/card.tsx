import React from 'react';
import {
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
} from 'react-beautiful-dnd';
import { TaskCard } from '../../types/taskBoard';

interface Props {
  readonly task: TaskCard;
  readonly handleOnModalOpend: Function;
  readonly handleOnSetSelectedTask: Function;
  readonly id: string;
  readonly index: number;
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
      color: 'white',
      display: 'block',
      width: '100%',
    },
    title: {
      fontWeight: 600,
    },
    time: {
      color: '#8495A8',
    },
  };
  const getItemStyle = (
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
    isDragging: boolean
  ) => {
    return {
      // userSelect: 'none',
      ...draggableStyle,
    };
  };
  function openDetail() {
    props.handleOnSetSelectedTask(props.task);
    props.handleOnModalOpend('detail');
  }
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            provided.draggableProps.style,
            snapshot.isDragging
          )}
        >
          <button onClick={openDetail} type="button" style={style.card}>
            <div style={style.title}>{props.task.title}</div>
            <div style={style.time}>{props.task.time}h</div>
          </button>
        </div>
      )}
    </Draggable>
  );
};
