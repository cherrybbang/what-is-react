import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css"

import App from "./App.js";

const root = createRoot(document.getElementById('root'));

// 컴포넌트를 가지고와서 그려주는 파일..
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)