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
  return (
    <Droppable droppableId={props.droppableId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            background: props.isCenter ? '#273547' : '#25313E',
            width: props.isCenter ? '33.4%' : '33.3%',
            padding: 10,
            overflowY: 'scroll',
          }}
        >
          {props.items.map((item: TaskCard, index: number) => (
            <Card
              key={item.id}
              id={item.id}
              task={item}
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
