import React from 'react'
import { TackCard } from '../molecules/TackCard';

interface OwnProps { }

const style = {
    background: "#102133",
    flex: "0 1 55%",
    display: "flex",
};

const styleLeft = {
    display: "flex",
    flex: "0 1 33%",
    background: "#25313E",
    flexFlow: "column",
    justifyContent: "space-between",
};

const style1 = {
    background: "#25313E",
    flex: "0 1 33%",
};

const style2 = {
    background: "#273547",
    flex: "0 1 34%",
};

const styleTackCardWrapper = {
    flex: "0 1 100%",
    padding: 20,
};

const styleTitle = {
    padding: 15,
    background: "#0000006b",
    height: 60,
    lineHeight: "60px",
    fontSize: 20,
    fontWeight: 700,
};

const styleTitleLeft = {
    flex: "0 1 60px",
    padding: "15px 0",
    background: "#0000006b",
    lineHeight: "60px",
    fontSize: 20,
    fontWeight: 700,
    width: "100%",
};

const styleTaskAddButton = {
    flex: "0 1 100px",
    background: "linear-gradient(125deg, #66B7FF, #0052de)",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: "100px",
    cursor: "pointer",
    width: "100%",
};

type Props = OwnProps
export const TaskBoard: React.FC<Props> = props => {
    return (
        <div style={style}>
            <div style={styleLeft}>
                <div style={styleTitleLeft}>
                    <div style={{ textAlign: "center" }}>やること</div>
                </div>
                <div style={styleTackCardWrapper}>
                    <TackCard />
                    <TackCard />
                    <TackCard />
                </div>
                <div style={styleTaskAddButton}>
                    +
                </div>
            </div>
            <div style={style2}>
                <div style={styleTitle}>
                    <div style={{ textAlign: "center" }}>実行中</div>
                </div>
            </div>
            <div style={style1}>
                <div style={styleTitle}>
                    <div style={{ textAlign: "center" }}>完了したこと</div>
                </div>
            </div>
        </div>
    )
}