import React, { useState } from 'react';
import Modal from 'react-modal';
import { style, hover, color } from '@/css/style';
import {
  CognitoUserPool,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';

interface Props {
  readonly socket: WebSocket;
  readonly handleOnModalOpend: Function;
  readonly registerUser: Function;
  readonly openedModalName: string;
}
export const ModalRegisterUser: React.FC<Props> = (props) => {
  const css = {
    modal: {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#192A46',
        color: color.white,
        width: '60%',
        border: 'none',
        cursor: 'auto',
        boxShadow: '0px 0px 6px #0000005c',
      },
    },
    titleArea: style({
      display: 'flex',
      justifyContent: 'space-between',
      color: '#F0F6FC',
      fontWeight: 600,
    }),
    inputName: style({
      color: color.white,
      fontSize: 18,
      background: '#2B4D6C',
      borderRadius: 20,
      border: 'none',
      padding: '5px 15px',
      width: '100%',
      height: 40,
      lineHeight: '40px',
      boxSizing: 'border-box',
    }),
    button: {
      ok: style({
        ...hover.button,
        marginTop: 20,
        fontSize: 18,
        color: color.white,
        background: color.buttonOK,
        borderRadius: 50,
        border: 'none',
        width: '100%',
        textAlign: 'center',
        height: 40,
        lineHeight: '40px',
        boxSizing: 'border-box',
        cursor: 'pointer',
      }),
    },
  };

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nickName, setNickName] = useState<string>('');

  const newUserPool = () => {
    const userPoolId = process.env.REACT_APP_AUTH_USER_POOL_ID as string;
    const clientId = process.env.REACT_APP_AUTH_CLIENT_ID as string;
    return new CognitoUserPool({
      UserPoolId: userPoolId,
      ClientId: clientId,
    });
  };

  const closeModal = () => props.handleOnModalOpend('');

  const addTask = () => {
    if (nickName === '') {
      alert('全て入力する必要があります。');
      return;
    }
    // props.registerUser(props.socket, nickName);
    closeModal();
  };

  const signUp = () => {
    if (email === '' || nickName === '' || password === '') {
      alert('全て入力する必要があります。');
      return;
    }
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      }),
      new CognitoUserAttribute({
        Name: 'nickname',
        Value: nickName,
      }),
    ];
    const userPool = newUserPool();
    userPool.signUp(email, password, attributeList, [], (err, res) => {
      console.log(res);
      if (err) {
        console.error(err);
        return;
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNickName(e.target.value);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNickName(e.target.value);

  return (
    <Modal
      isOpen={props.openedModalName === 'register'}
      style={css.modal}
      overlayClassName="modalOverLayWrapper"
      contentLabel="モーダル"
    >
      <div>
        <div className={css.titleArea}>
          <div>ゲスト登録（一定期間するとログインできなくなります。）</div>
        </div>
        <div style={{ marginTop: 20 }}>
          <input
            onChange={handleChange}
            className={css.inputName}
            placeholder="ニックネーム"
            maxLength={12}
          />
        </div>
        <button type="button" className={css.button.ok} onClick={addTask}>
          ゲスト登録する
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <div className={css.titleArea}>
          <div>メールアドレス登録</div>
        </div>
        <div style={{ marginTop: 20 }}>
          <input
            type="text"
            onChange={handleNickName}
            className={css.inputName}
            placeholder="ニックネーム"
            maxLength={50}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <input
            type="email"
            onChange={handleEmail}
            className={css.inputName}
            placeholder="メールアドレス"
            maxLength={100}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <input
            type="password"
            onChange={handlePassword}
            className={css.inputName}
            placeholder="パスワード(8文字以上/大文字/小文字/記号/数字含む)"
            minLength={8}
            maxLength={50}
          />
        </div>
        <button type="button" className={css.button.ok} onClick={signUp}>
          メールアドレス登録する
        </button>
      </div>
    </Modal>
  );
};
