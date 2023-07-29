import React from "react";
import reactDom from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// reactDom.render(<App />, document.getElementById("root"));