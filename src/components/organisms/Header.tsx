import React from 'react'

interface OwnProps {
    title: string
}

const style = {
    padding: "0 32px",
    color: "white",
    background: "#639",
    height: 80,
    lineHeight: "80px",
};

type Props = OwnProps
export const Header: React.FC<Props> = props => {
    return (
        <div style={style}>
            <span>{props.title}</span>
        </div>
    )
}