// ユーザ作成
export const requestUserCreate = (
  socket: WebSocket,
  email: string,
  name: string,
  password: string
) => {
  const action = 'sendmessage';
  const role = 'user_create';
  const data = {
    role,
    email,
    name,
    password,
  };
  console.log(data);
  socket.send(JSON.stringify({ action, data }));
};

// ユーザゲスト作成
export const requestUserGuestCreate = (socket: WebSocket, name: string) => {
  const action = 'sendmessage';
  const role = 'user_create_guest';
  const data = {
    role,
    name,
  };
  console.log(data);
  socket.send(JSON.stringify({ action, data }));
};

// ユーザサインイン
export const requestUserSignin = (
  socket: WebSocket,
  email: string,
  password: string
) => {
  const action = 'sendmessage';
  const role = 'user_signin';
  const data = {
    role,
    email,
    password,
  };
  console.log(data);
  socket.send(JSON.stringify({ action, data }));
};

// ユーザ一覧取得
export const requestActiveUserSearch = (socket: WebSocket, token: string) => {
  const action = 'sendmessage';
  const role = 'active_user_search';
  const data = {
    role,
    token,
  };
  socket.send(JSON.stringify({ action, data }));
};
