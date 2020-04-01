import React from 'react'

interface OwnProps { }

const style = {
    background: "#3e547a",
    height: "1px",
};

type Props = OwnProps
export const MessageLineBar: React.FC<Props> = props => {
    return (
        <div style={style} />
    )
}