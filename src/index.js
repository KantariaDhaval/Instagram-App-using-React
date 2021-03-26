import React from "react";
import ReactDOM from "react-dom";
import Profile from "./ProfileComponents/Profile";
import Footer from "./FooterComponents/Footer";
import "./index.css";

ReactDOM.render(<Profile />, document.getElementById("profile"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
