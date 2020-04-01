import React from 'react'

interface OwnProps { }

const style = {
    background: "#1C2D3F",
    flex: "0 1 45%",
};

const style2 = {
    display: "flex",
    padding: "20px",
};

const styleRoom = {
    background: "linear-gradient(125deg, #66B7FF, #0052de)",
    padding: "15px 10px 15px 20px",
    borderRadius: "5px",
    fontWeight: 800,
};

const styleRoomCreateWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const styleRoomCreate = {
    display: "flex",
    background: "linear-gradient(125deg, #66B7FF, #0052de)",
    width: "30px",
    height: "30px",
    marginLeft: "10px",
    borderRadius: "100px",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
};

const styleRoomButton = {
    cursor: "pointer",
    padding: "0px 10px",
}

const style4 = {
    background: "#677182",
    height: "1px",
};

type Props = OwnProps
export const MessageBoard: React.FC<Props> = props => {
    return (
        <div style={style}>
            <div style={style2}>
                <div style={styleRoom}>
                    <span>
                        エンジニアもくもく会
                    </span>
                    <span style={styleRoomButton}>
                        V
                    </span>
                </div>
                <div style={styleRoomCreateWrapper}>
                    <div style={styleRoomCreate}>
                        +
                    </div>
                </div>
            </div>
            <div style={style4} />
            メッセージ
        </div>
    )
}