import React from 'react';

interface OwnProps { }

const styleCard = {
    background: "#2A3B57",
    padding: "15px 10px",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0px -1px 8px #00000036",
    marginBottom: "10px",
};

const styleTitle = {
    fontWeight: 600,
};

const styleTime = {
    color: "#8495A8",
};

type Props = OwnProps
export const TackCard: React.FC<Props> = props => {
    return (
        <div style={styleCard}>
            <div style={styleTitle}>
                railsのAPIサーバをEC2へデプロイ
            </div>
            <div style={styleTime}>
                1h
            </div>
        </div>
    )
}
