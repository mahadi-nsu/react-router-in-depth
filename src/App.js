import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { css } from "@emotion/css";

import Admin from "./Admin/Admin";
import Products from "./Products/Products";
import Nav from "./Common/Nav";

const appStyles = css`
  margin: 50px auto;
  width: 380px;

  .Container {
    background: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 6px;
    padding: 25px;
  }
`;
function App() {
  return (
    <div className={appStyles}>
      <Router>
        <div className="Container">
          <Nav />
          <Routes>
            <Route path="/" element={<Products />}>
              <Route element={<div>Hey i am nested</div>} />
            </Route>
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
