import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

export const Card: React.FC = () => {
    type ItemType = {
        id: string;
        content: string;
    };
    const initial1: ItemType[] = [
        {
            id: `id-1`,
            content: `Item 1`
        },
        {
            id: `id-2`,
            content: `Item 2`
        },
        {
            id: `id-3`,
            content: `Item 3`
        },
    ];
    const initial2: ItemType[] = [
        {
            id: `id-11`,
            content: `Item 11`
        },
        {
            id: `id-12`,
            content: `Item 12`
        },
        {
            id: `id-13`,
            content: `Item 13`
        },
    ];
    const [state, setState] = useState({
        items: initial1,
        item2s: initial2,
    });

    const reorder = (
        list: ItemType[],
        startIndex: number,
        endIndex: number,
    ): ItemType[] => {
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
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        if (droppableSource.droppableId === 'droppable1') {
            const result: any = {
                items: sourceClone,
                item2s: destClone,
            };
            return result;
        }
        const result: any = {
            items: destClone,
            item2s: sourceClone,
        };
        return result;
    };

    const getList = (id: string) => {
        if (id === 'droppable1') return state.items
        return state.item2s
    }

    const onDragEnd = (result: any) => {
        if (!result.destination) return;
        if (result.destination.index === result.source.index && result.source.droppableId === result.destination.droppableId) return;

        if (result.source.droppableId === result.destination.droppableId) {
            const items = reorder(
                state.items,
                result.source.index,
                result.destination.index
            );

            setState({
                items,
                item2s: state.item2s,
            });
        } else {
            const res = move(
                getList(result.source.droppableId),
                getList(result.destination.droppableId),
                result.source,
                result.destination
            );

            setState({
                items: res.items,
                item2s: res.item2s,
            });
        }
    };

    const getItemStyle = (draggableStyle: any, isDragging: any) => {
        return ({
            userSelect: 'none',
            background: isDragging ? 'lightgreen' : 'grey',
            height: 30,
            width: 200,
            ...draggableStyle,
        })
    };

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div style={{ display: "flex" }}>
                    <Droppable droppableId="droppable1">
                        {provided => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>

                                {state.items.map((item: ItemType, index: number) => (
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
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}

                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId="droppable2">
                        {provided => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>

                                {state.item2s.map((item: ItemType, index: number) => (
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
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}

                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        </div>
    );
};
