// Bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css";
// React library
import React from "react";
import { render } from "react-dom";
// BrowserRouter for Routing
import { BrowserRouter as Router } from "react-router-dom";
// Our App component
import App from "./App";

render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
