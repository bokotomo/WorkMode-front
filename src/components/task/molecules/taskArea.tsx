import React from 'react';
import {
  DragDropContext,
  DropResult,
  DraggableLocation,
} from 'react-beautiful-dnd';
import { TaskCard } from '@/types/taskBoard';
import { Item } from '@/components/task/molecules/item';

interface Props {
  readonly setTaskTodo: Function;
  readonly setTaskInProgresses: Function;
  readonly setTaskDone: Function;
  readonly setSelectedTask: Function;
  readonly updateTaskStatus: Function;
  readonly todos: TaskCard[];
  readonly inProgresses: TaskCard[];
  readonly dones: TaskCard[];
}
export const TaskArea: React.FC<Props> = (props) => {
  const reorder = (
    list: TaskCard[],
    startIndex: number,
    endIndex: number
  ): TaskCard[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const move = (
    source: TaskCard[],
    destination: TaskCard[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation
  ) => {
    let todos = props.todos as TaskCard[];
    let inProgresses = props.inProgresses as TaskCard[];
    let dones = props.dones as TaskCard[];
    if (droppableDestination.droppableId === 'doneArea') {
      const isYes = window.confirm('完了しますか？');
      if (!isYes)
        return {
          todos,
          inProgresses,
          dones,
        };
    }
    const sourceClone = Array.from(source) as TaskCard[];
    const destClone = Array.from(destination) as TaskCard[];
    const [removedTask] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removedTask);

    if (droppableSource.droppableId === 'todoArea') {
      todos = sourceClone;
    } else if (droppableSource.droppableId === 'inProgressArea') {
      inProgresses = sourceClone;
    } else {
      dones = sourceClone;
    }
    if (droppableDestination.droppableId === 'todoArea') {
      todos = destClone;
      props.updateTaskStatus(removedTask.id, 'todo');
    } else if (droppableDestination.droppableId === 'inProgressArea') {
      inProgresses = destClone;
      props.updateTaskStatus(removedTask.id, 'inprogress');
    } else {
      props.updateTaskStatus(removedTask.id, 'done');
      dones = destClone;
    }
    return {
      todos,
      inProgresses,
      dones,
    };
  };

  const getList = (id: string) => {
    if (id === 'todoArea') return props.todos;
    if (id === 'inProgressArea') return props.inProgresses;
    return props.dones;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    if (
      result.destination.index === result.source.index &&
      result.source.droppableId === result.destination.droppableId
    )
      return;

    if (result.source.droppableId === result.destination.droppableId) {
      if (result.source.droppableId === 'todoArea') {
        const todos = reorder(
          props.todos,
          result.source.index,
          result.destination.index
        );
        props.setTaskTodo(todos);
      } else if (result.source.droppableId === 'inProgressArea') {
        const inProgresses = reorder(
          props.inProgresses,
          result.source.index,
          result.destination.index
        );
        props.setTaskInProgresses(inProgresses);
      } else {
        const dones = reorder(
          props.dones,
          result.source.index,
          result.destination.index
        );
        props.setTaskDone(dones);
      }
    } else {
      const res = move(
        getList(result.source.droppableId),
        getList(result.destination.droppableId),
        result.source,
        result.destination
      );
      props.setTaskTodo(res.todos);
      props.setTaskInProgresses(res.inProgresses);
      props.setTaskDone(res.dones);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', height: '100%' }}>
        <Item
          setSelectedTask={props.setSelectedTask}
          items={props.todos}
          droppableId="todoArea"
          isCenter={false}
        />
        <Item
          setSelectedTask={props.setSelectedTask}
          items={props.inProgresses}
          droppableId="inProgressArea"
          isCenter={true}
        />
        <Item
          setSelectedTask={props.setSelectedTask}
          items={props.dones}
          droppableId="doneArea"
          isCenter={false}
        />
      </div>
    </DragDropContext>
  );
};
