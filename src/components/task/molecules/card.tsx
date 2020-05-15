import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionModal } from '@/redux/action/modal';
import { style, hover } from '@/css/style';
import {
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
} from 'react-beautiful-dnd';
import { TaskCard } from '@/types/taskBoard';

interface Props {
  readonly task: TaskCard;
  readonly setSelectedTask: Function;
  readonly index: number;
}
export const Card: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const css = {
    card: {
      background: '#294063',
      padding: '15px 10px',
      borderRadius: '10px',
      cursor: 'pointer',
      boxShadow: '0px -1px 8px #00000036',
      fontSize: 15,
      color: 'white',
      marginBottom: 15,
      boxSizing: 'border-box',
    },
    cardHover: style({
      ...hover.card,
    }),
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

  const onOpenDetail = () => {
    props.setSelectedTask(props.task);
    dispatch(ActionModal.updateModalOpened('detail'));
  };

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          className={css.cardHover}
          tabIndex={props.index}
          role="button"
          onClick={onOpenDetail}
          onKeyDown={onOpenDetail}
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
