import React from 'react'

interface OwnProps { }
type Props = OwnProps
export const Contents: React.FC<Props> = props => {
    var texts = [];
    var data = [
        { text: "a" },
        { text: "b" },
        { text: "c" },
        { text: "d" },
        { text: "e" },
    ];
    for (var i in data) {
        texts.push(<div>コンテンツ{data[i].text}</div>);
    }

    return (
        <React.Fragment>
            {texts}
        </React.Fragment>
    )
}