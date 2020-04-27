import React from 'react';
import {
  DragDropContext,
  DropResult,
  DraggableLocation,
} from 'react-beautiful-dnd';
import { TaskCard } from '@/types/taskBoard';
import { Item } from '@/components/toppage/molecules/item';

interface Props {
  readonly handleOnSetTaskTodo: Function;
  readonly handleOnSetTaskInProgresses: Function;
  readonly handleOnSetTaskDone: Function;
  readonly handleOnModalOpend: Function;
  readonly handleOnSetSelectedTask: Function;
  readonly updateTaskStatus: Function;
  readonly todos: TaskCard[];
  readonly inProgresses: TaskCard[];
  readonly dones: TaskCard[];
  readonly socket: WebSocket;
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
      props.updateTaskStatus(props.socket, removedTask.id, 'todo');
    } else if (droppableDestination.droppableId === 'inProgressArea') {
      inProgresses = destClone;
      props.updateTaskStatus(props.socket, removedTask.id, 'inprogress');
    } else {
      props.updateTaskStatus(props.socket, removedTask.id, 'done');
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
        props.handleOnSetTaskTodo(todos);
      } else if (result.source.droppableId === 'inProgressArea') {
        const inProgresses = reorder(
          props.inProgresses,
          result.source.index,
          result.destination.index
        );
        props.handleOnSetTaskInProgresses(inProgresses);
      } else {
        const dones = reorder(
          props.dones,
          result.source.index,
          result.destination.index
        );
        props.handleOnSetTaskDone(dones);
      }
    } else {
      const res = move(
        getList(result.source.droppableId),
        getList(result.destination.droppableId),
        result.source,
        result.destination
      );
      props.handleOnSetTaskTodo(res.todos);
      props.handleOnSetTaskInProgresses(res.inProgresses);
      props.handleOnSetTaskDone(res.dones);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', height: '100%' }}>
        <Item
          handleOnModalOpend={props.handleOnModalOpend}
          handleOnSetSelectedTask={props.handleOnSetSelectedTask}
          items={props.todos}
          droppableId="todoArea"
          isCenter={false}
        />
        <Item
          handleOnModalOpend={props.handleOnModalOpend}
          handleOnSetSelectedTask={props.handleOnSetSelectedTask}
          items={props.inProgresses}
          droppableId="inProgressArea"
          isCenter={true}
        />
        <Item
          handleOnModalOpend={props.handleOnModalOpend}
          handleOnSetSelectedTask={props.handleOnSetSelectedTask}
          items={props.dones}
          droppableId="doneArea"
          isCenter={false}
        />
      </div>
    </DragDropContext>
  );
};
