import React from "react";

import SBApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";

const Chat = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <SBApp appId={"7817730D-EF7D-4E94-9C77-45FAE9CFD522"} userId={"Ahn"} />
    </div>
  );
};

export default Chat;
