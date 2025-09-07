import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
import {ConfigProvider} from "antd";
import {overrides} from "./theme/overrides-ant-d";
import "./styles/variables.css";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={overrides}>
      <App />
    </ConfigProvider>
  </StrictMode>
);
