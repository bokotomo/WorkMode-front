import React from 'react';

interface OwnProps {}
type Props = OwnProps;
export const ValidationPage: React.FC<Props> = (props) => {
  const [email, setEmail] = React.useState<string>('');
  const [verificationCode, setVerificationCode] = React.useState<string>('');
  const changedEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const changedVerificationCodeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setVerificationCode(e.target.value);

  const verifyCode = () => {
    alert('apiへ送信');
  };

  return (
    <div
      style={{
        background: '#102133',
        color: 'white',
        height: '100%',
      }}
    >
      <div>認証コードを入力してください。</div>
      <div>
        <input
          type="text"
          placeholder="verification code"
          onChange={changedVerificationCodeHandler}
        />
      </div>
      <div>
        <input type="text" placeholder="email" onChange={changedEmailHandler} />
      </div>
      <button type="button" onClick={verifyCode} style={{ color: 'white' }}>
        認証する
      </button>
    </div>
  );
};
