import React from 'react';
import { style } from '@/css/style';
import {
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
} from 'react-beautiful-dnd';
import { TaskCard } from '@/types/taskBoard';

interface Props {
  readonly task: TaskCard;
  readonly handleOnModalOpend: Function;
  readonly handleOnSetSelectedTask: Function;
  readonly index: number;
}
export const Card: React.FC<Props> = (props) => {
  const css = {
    card: {
      background: '#2A3B57',
      padding: '15px 10px',
      borderRadius: '10px',
      cursor: 'pointer',
      boxShadow: '0px -1px 8px #00000036',
      fontSize: 15,
      color: 'white',
      marginBottom: 15,
      boxSizing: 'border-box',
    },
    title: style({
      fontWeight: 600,
    }),
    time: style({
      color: '#8495A8',
    }),
  };

  const getItemStyle = (
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
    isDragging: boolean
  ) => {
    return {
      userSelect: 'none',
      ...draggableStyle,
      ...css.card,
    } as React.CSSProperties;
  };

  function openDetail() {
    props.handleOnSetSelectedTask(props.task);
    props.handleOnModalOpend('detail');
  }

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          tabIndex={props.index}
          role="button"
          onClick={openDetail}
          onKeyDown={openDetail}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            provided.draggableProps.style,
            snapshot.isDragging
          )}
        >
          <div className={css.title}>{props.task.title}</div>
          <div className={css.time}>{props.task.time}h</div>
        </div>
      )}
    </Draggable>
  );
};
