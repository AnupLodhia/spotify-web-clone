import React from "react";
import { loginUrl } from "../spotify";
import "./Login.css";

function Login() {
    return (
        <div className="login">
            {/* Spotify Logo */}
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="" />
            {/* Login with spotify */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;
