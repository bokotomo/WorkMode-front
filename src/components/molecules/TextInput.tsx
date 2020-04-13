import React from 'react';

interface Props {
    readonly title: string
    readonly inputValue: string
    readonly onChangeValue: Function
}
export const TextInput: React.FC<Props> = props => {
    return (
        <div>
            <span>{props.title}</span>
            <input name={props.title} type='text' value={props.inputValue} onChange={(e) => props.onChangeValue(e.target.value)}></input>
        </div>
    )
}
