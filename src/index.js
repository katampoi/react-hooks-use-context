import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

function Profile({user, theme}){
    if(!user) return <h2>Please Login To View Profile</h2>;
    return (
        <div>
        <h2>{user.name}'s Profile</h2>
        <Interests interests={user.interests} theme={theme} />
        </div>
    )
} 