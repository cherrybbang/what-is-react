import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css"

import App from "./App.js";

const root = createRoot(document.getElementById('root'));

console.log(StrictMode);

// 컴포넌트를 가지고와서 그려주는 파일..
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

// StrictMode
// 컴포넌트 내 버그 검사
// 개발전용이며 빌드에는 영향 x
// 개발 프로세스 초기에 컴포넌트에서 일반적인 버그를 찾는데 도움