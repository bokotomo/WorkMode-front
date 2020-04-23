// ユーザ作成
export const requestUserCreate = (socket: WebSocket, name: string) => {
  const action = 'sendmessage';
  const role = 'user_create';
  const data = {
    role,
    name,
  };
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
