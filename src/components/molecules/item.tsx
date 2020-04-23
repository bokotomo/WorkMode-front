import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { TaskCard } from '@/types/taskBoard';
import { Card } from '@/components/molecules/card';

interface Props {
  readonly handleOnModalOpend: Function;
  readonly handleOnSetSelectedTask: Function;
  readonly items: TaskCard[];
  readonly droppableId: string;
  readonly isCenter: boolean;
}
export const Item: React.FC<Props> = (props) => {
  interface StyleItem {
    item: React.CSSProperties;
  }
  const style: StyleItem = {
    item: {
      background: props.isCenter ? '#273547' : '#25313E',
      width: props.isCenter ? '33.4%' : '33.3%',
      padding: 10,
      overflowY: 'scroll',
    },
  };
  return (
    <Droppable droppableId={props.droppableId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={style.item}
        >
          {props.items.map((task: TaskCard, index: number) => (
            <Card
              key={task.id}
              task={task}
              index={index}
              handleOnModalOpend={props.handleOnModalOpend}
              handleOnSetSelectedTask={props.handleOnSetSelectedTask}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
