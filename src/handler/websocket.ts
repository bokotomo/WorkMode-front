// WebSocketのハンドリング

export const onMessage = (message: MessageEvent, socket: WebSocket) => {
    console.log(message);
    alert("KO")
};

export const onOpen = (event: Event, socket: WebSocket) => {
    socket.send(JSON.stringify({ action: "sendmessage", data: "hello world" }));
};