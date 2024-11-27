"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_tsx_1 = require("./App.tsx");
var react_router_dom_1 = require("react-router-dom");
(0, client_1.createRoot)(document.getElementById('root')).render(<react_1.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <App_tsx_1.default />
    </react_router_dom_1.BrowserRouter>
  </react_1.StrictMode>);
