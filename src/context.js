import React from "react";

// Понадобиться, чтобы по апи в каких-то компонентах запросы совершать
export const UserContext = React.createContext({
    userId: "0",
    setUserId: () => {}
});