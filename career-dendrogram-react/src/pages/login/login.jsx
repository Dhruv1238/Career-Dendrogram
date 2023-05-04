import React, { useState } from 'react';
import "./login.css";
import Button from "../../components/button/button";



const Login = () => {

    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        if (username.trim() === "" || password.trim() === "") {
            e.preventDefault();
            alert("Please enter both username and password");
        } else {
            console.log("Logged in successfully");
        }
    };
    return (
        <div className="loginbox">
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <label htmlFor="userName">Username</label>
                <input
                    type="text"
                    name="userName"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <Button inputValue={"login"} lenk={"/careers"}/>
            </form>
        </div>
    );
}

export default Login;