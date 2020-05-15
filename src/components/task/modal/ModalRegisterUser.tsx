import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionModal } from '@/redux/action/modal';
import { AppState } from '@/redux/reducer';
import Modal from 'react-modal';
import { style, hover, color } from '@/css/style';

interface Props {
  readonly registerGuestUser: Function;
  readonly registerUser: Function;
  readonly signin: Function;
}
export const ModalRegisterUser: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const openedModalName = useSelector(
    (state: AppState) => state.modal.openedModalName
  );
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
      register: style({
        ...hover.button,
        marginTop: 20,
        fontSize: 18,
        color: color.white,
        background: 'linear-gradient(125deg, #66dcff, #0078de)',
        borderRadius: 50,
        border: 'none',
        width: '100%',
        textAlign: 'center',
        height: 40,
        lineHeight: '40px',
        boxSizing: 'border-box',
        cursor: 'pointer',
      }),
      twitter: style({
        ...hover.button,
        marginTop: 20,
        fontSize: 18,
        color: color.white,
        background: '#00acee',
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

  const [isRegisterMode, setIsRegisterMode] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nickName, setNickName] = useState<string>('');
  const [guestName, setGuestName] = useState<string>('');
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');

  const closeModal = () => dispatch(ActionModal.updateModalOpened(''));

  const onCreateGuestUser = () => {
    if (guestName === '') {
      alert('全て入力する必要があります。');
      return;
    }
    props.registerGuestUser(guestName);
    closeModal();
    setNickName('');
  };

  const onSignup = () => {
    if (email === '' || nickName === '' || password === '') {
      alert('全て入力する必要があります。');
      return;
    }
    if (password.length < 8) {
      alert('パスワードは、８文字以上でないといけません');
      return;
    }
    props.registerUser(email, nickName, password);
  };

  const onSignin = () => {
    if (loginEmail === '' || loginPassword === '') {
      alert('全て入力する必要があります。');
      return;
    }
    if (loginPassword.length < 8) {
      alert('パスワードは、８文字以上でないといけません');
      return;
    }
    props.signin(loginEmail, loginPassword);
  };

  const onChangeRegisterMode = () => setIsRegisterMode(!isRegisterMode);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setGuestName(e.target.value);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNickName(e.target.value);

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onChangeLoginEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginEmail(e.target.value);

  const onChangeLoginPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginPassword(e.target.value);

  return (
    <Modal
      isOpen={openedModalName === 'register'}
      style={css.modal}
      overlayClassName="modalOverLayWrapper"
      contentLabel="モーダル"
    >
      {!isRegisterMode && (
        <div>
          <div className={css.titleArea}>
            <div>ゲスト登録（一定期間するとログインできなくなります。）</div>
          </div>
          <div style={{ marginTop: 20 }}>
            <input
              value={guestName}
              onChange={onChange}
              className={css.inputName}
              placeholder="ニックネーム"
              maxLength={12}
            />
          </div>
          <button
            type="button"
            className={css.button.ok}
            onClick={onCreateGuestUser}
          >
            ゲスト登録する
          </button>
        </div>
      )}

      <div style={{ marginTop: 20 }}>
        {!isRegisterMode && (
          <div>
            <div className={css.titleArea}>
              <div>ログイン</div>
            </div>
            <div style={{ marginTop: 20 }}>
              <input
                type="email"
                value={loginEmail}
                onChange={onChangeLoginEmail}
                className={css.inputName}
                placeholder="メールアドレス"
                maxLength={100}
              />
            </div>
            <div style={{ marginTop: 20 }}>
              <input
                type="password"
                value={loginPassword}
                onChange={onChangeLoginPassword}
                className={css.inputName}
                placeholder="パスワード"
                minLength={8}
                maxLength={50}
              />
            </div>
            <button type="button" className={css.button.ok} onClick={onSignin}>
              ログイン
            </button>
          </div>
        )}

        {isRegisterMode && (
          <div>
            <div className={css.titleArea}>
              <div>新規登録（メールアドレスに確認リンクが届きます。）</div>
            </div>
            <div style={{ marginTop: 20 }}>
              <input
                type="text"
                value={nickName}
                onChange={onChangeNickName}
                className={css.inputName}
                placeholder="ニックネーム"
                maxLength={50}
              />
            </div>
            <div style={{ marginTop: 20 }}>
              <input
                type="email"
                value={email}
                onChange={onChangeEmail}
                className={css.inputName}
                placeholder="メールアドレス"
                maxLength={100}
              />
            </div>
            <div style={{ marginTop: 20 }}>
              <input
                type="password"
                value={password}
                onChange={onChangePassword}
                className={css.inputName}
                placeholder="パスワード(8文字以上/大文字/小文字/記号/数字含む)"
                minLength={8}
                maxLength={50}
              />
            </div>
            <button type="button" className={css.button.ok} onClick={onSignup}>
              登録をする
            </button>
          </div>
        )}

        <button
          type="button"
          className={css.button.register}
          onClick={onChangeRegisterMode}
        >
          {!isRegisterMode && <>新規登録はこちら</>}
          {isRegisterMode && <>ログインはこちら</>}
        </button>
      </div>
    </Modal>
  );
};
