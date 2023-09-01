import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd-mobile";
import ruRU from "antd-mobile/es/locales/ru-RU";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider locale={ruRU}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
