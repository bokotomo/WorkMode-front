
// ユーザ作成
export const requestUserCreate = (socket: WebSocket, name: string) => {
    const action = 'sendmessage'
    const role = 'user_create'
    const data = {
        role,
        name,
    }
    socket.send(JSON.stringify({ action, data }));
};