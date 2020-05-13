import React from 'react';

interface Props {}
export const ValidationPage: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        background: '#102133',
        color: 'white',
        height: '100%',
      }}
    >
      <div>認証コードを入力してください。</div>
    </div>
  );
};
