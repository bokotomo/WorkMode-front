import React from 'react';
import { Draggable, Droppable, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import { TaskCard } from '../../types/taskBoard';
import { Card } from '../molecules/card';

interface Props {
    readonly handleOnModalOpend: Function
    readonly handleOnSetSelectedTask: Function
    readonly items: TaskCard[]
    readonly droppableId: string
    readonly isCenter: boolean
}
export const Item: React.FC<Props> = (props) => {
    const getItemStyle = (draggableStyle: DraggingStyle | NotDraggingStyle | undefined, isDragging: boolean) => {
        return ({
            // userSelect: 'none',
            ...draggableStyle,
        })
    };
    return (
        <Droppable droppableId={props.droppableId}>
            {provided => (
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
                        <Draggable key={item.id} draggableId={item.id} index={index}>
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
                                    <Card
                                        task={item}
                                        handleOnModalOpend={props.handleOnModalOpend}
                                        handleOnSetSelectedTask={props.handleOnSetSelectedTask}
                                    />
                                </div>
                            )}
                        </Draggable>
                    ))}

                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}