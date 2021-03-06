import React from 'react';
import { style } from '@/css/style';
import { Droppable } from 'react-beautiful-dnd';
import { TaskCard } from '@/types/taskBoard';
import { Card } from '@/components/task/molecules/card';

interface Props {
  readonly setSelectedTask: Function;
  readonly items: TaskCard[];
  readonly droppableId: string;
  readonly isCenter: boolean;
}
export const Item: React.FC<Props> = (props) => {
  const css = {
    item: style({
      background: props.isCenter ? '#273547' : '#25313E',
      width: props.isCenter ? '33.4%' : '33.3%',
      padding: 10,
      overflowY: 'scroll',
    }),
  };
  return (
    <Droppable droppableId={props.droppableId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={css.item}
        >
          {props.items.map((task: TaskCard, index: number) => (
            <Card
              key={task.id}
              task={task}
              index={index}
              setSelectedTask={props.setSelectedTask}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
