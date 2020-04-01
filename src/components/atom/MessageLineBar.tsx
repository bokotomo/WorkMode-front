import React from 'react'

interface OwnProps { }

const style = {
    background: "#677182",
    height: "1px",
};

type Props = OwnProps
export const MessageLineBar: React.FC<Props> = props => {
    return (
        <div style={style} />
    )
}