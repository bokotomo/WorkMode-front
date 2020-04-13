import React from 'react'

interface Props {
    readonly title: string
    readonly onClick: Function
}
export const SubmitButton: React.FC<Props> = props => {
    return (
        <div>
            <button onClick={() => props.onClick()}>{props.title}</button>
        </div>
    )
}