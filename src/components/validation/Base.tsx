import React from 'react';
import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';

interface OwnProps {}
type Props = OwnProps;
export const ValidationPage: React.FC<Props> = (props) => {
  const newUserPool = () => {
    const userPoolId = process.env.REACT_APP_AUTH_USER_POOL_ID as string;
    const clientId = process.env.REACT_APP_AUTH_CLIENT_ID as string;
    return new CognitoUserPool({
      UserPoolId: userPoolId,
      ClientId: clientId,
    });
  };
  const [email, setEmail] = React.useState<string>('');
  const [verificationCode, setVerificationCode] = React.useState<string>('');
  const changedEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const changedVerificationCodeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setVerificationCode(e.target.value);

  const verifyCode = () => {
    const userPool = newUserPool();
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool,
    });
    cognitoUser.confirmRegistration(verificationCode, true, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('verification succeeded');
    });
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
        Authenticate
      </button>
    </div>
  );
};
