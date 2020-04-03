import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Item } from "./item"
import { TaskCard } from '../../types/taskBoard';

interface Props {
    handleOnSetTaskTodo: Function
    handleOnSetTaskInProgresses: Function
    handleOnSetTaskDone: Function
    handleOnModalOpend: Function
    handleOnSetSelectedTask: Function
    handleOnAddMessage: Function
    todos: TaskCard[],
    inProgresses: TaskCard[],
    dones: TaskCard[],
}
export const TaskArea: React.FC<Props> = props => {
    const reorder = (
        list: TaskCard[],
        startIndex: number,
        endIndex: number,
    ): TaskCard[] => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const move = (
        source: any,
        destination: any,
        droppableSource: any,
        droppableDestination: any,
    ) => {
        const sourceClone = Array.from(source) as TaskCard[];
        const destClone = Array.from(destination) as TaskCard[];
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        var todos = props.todos, inProgresses = props.inProgresses, dones = props.dones;
        if (droppableSource.droppableId === 'todoArea') {
            todos = sourceClone
        } else if (droppableSource.droppableId === "inProgressArea") {
            inProgresses = sourceClone
        } else {
            dones = sourceClone
        }
        if (droppableDestination.droppableId === 'todoArea') {
            todos = destClone
        } else if (droppableDestination.droppableId === "inProgressArea") {
            inProgresses = destClone
            if (droppableSource.droppableId === 'todoArea') {
                const message = props.todos[droppableSource.index]
                props.handleOnAddMessage({
                    userName: "山田太郎",
                    userColor: "#8A29AD",
                    text: message.title,
                    progress: 60,
                    status: "run",
                    createdAt: new Date(),
                })
            }
        } else {
            alert("よろしいですか？")
            const message = props.inProgresses[droppableSource.index]
            props.handleOnAddMessage({
                userName: "山田太郎",
                userColor: "#8A29AD",
                text: message.title,
                progress: 60,
                status: "done",
                createdAt: new Date(),
            })

            dones = destClone
        }
        const result: any = {
            todos,
            inProgresses,
            dones,
        };
        return result;
    };

    const getList = (id: string) => {
        if (id === 'todoArea') return props.todos
        if (id === 'inProgressArea') return props.inProgresses
        return props.dones
    }

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        if (result.destination.index === result.source.index && result.source.droppableId === result.destination.droppableId) return;

        if (result.source.droppableId === result.destination.droppableId) {
            if (result.source.droppableId === "todoArea") {
                const todos = reorder(
                    props.todos,
                    result.source.index,
                    result.destination.index
                );
                props.handleOnSetTaskTodo(todos)
            } else if (result.source.droppableId === "inProgressArea") {
                const inProgresses = reorder(
                    props.inProgresses,
                    result.source.index,
                    result.destination.index
                );
                props.handleOnSetTaskInProgresses(inProgresses)
            } else {
                const dones = reorder(
                    props.dones,
                    result.source.index,
                    result.destination.index
                );
                props.handleOnSetTaskDone(dones)
            }
        } else {
            const res = move(
                getList(result.source.droppableId),
                getList(result.destination.droppableId),
                result.source,
                result.destination
            );
            props.handleOnSetTaskTodo(res.todos)
            props.handleOnSetTaskInProgresses(res.inProgresses)
            props.handleOnSetTaskDone(res.dones)
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div style={{ display: "flex", height: "100%" }}>
                <Item
                    handleOnModalOpend={props.handleOnModalOpend}
                    handleOnSetSelectedTask={props.handleOnSetSelectedTask}
                    items={props.todos}
                    droppableId={"todoArea"}
                    isCenter={false}
                />
                <Item
                    handleOnModalOpend={props.handleOnModalOpend}
                    handleOnSetSelectedTask={props.handleOnSetSelectedTask}
                    items={props.inProgresses}
                    droppableId={"inProgressArea"}
                    isCenter={true}
                />
                <Item
                    handleOnModalOpend={props.handleOnModalOpend}
                    handleOnSetSelectedTask={props.handleOnSetSelectedTask}
                    items={props.dones}
                    droppableId={"doneArea"}
                    isCenter={false}
                />
            </div>
        </DragDropContext>
    );
};