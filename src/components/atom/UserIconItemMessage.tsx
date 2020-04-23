import React from 'react';

interface Props {
  readonly name: string;
  readonly color: string;
}
export const UserIconItemMessage: React.FC<Props> = (props) => {
  const getTopName = (name: string) => name.slice(0, 1);
  return (
    <div
      style={{
        width: 50,
        height: 50,
        borderRadius: 50,
        cursor: 'pointer',
        lineHeight: '50px',
        background: props.color,
        margin: 'auto',
        color: '#ffffffad',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 900,
      }}
    >
      {getTopName(props.name)}
    </div>
  );
};
