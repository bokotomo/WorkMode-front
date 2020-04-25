import React from 'react';

interface Props {
  readonly name: string;
  readonly color: string;
}
export const UserIconItem: React.FC<Props> = (props) => {
  const getTopName = (name: string) => name.slice(0, 1);
  return (
    <div
      style={{
        position: 'relative',
        width: 40,
        height: 40,
        lineHeight: '40px',
        background: props.color,
        borderRadius: 40,
        margin: 'auto',
        color: '#ffffffad',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 900,
      }}
    >
      <div
        style={{
          position: 'absolute',
          background: '#48BB33',
          border: '1px solid #8EBD84',
          borderRadius: 10,
          width: 10,
          height: 10,
          right: 0,
          bottom: 0,
        }}
      />
      {getTopName(props.name)}
    </div>
  );
};
