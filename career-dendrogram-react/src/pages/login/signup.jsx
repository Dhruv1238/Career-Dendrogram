import React, { useState } from 'react';
import "./login.css";
import Button from "../../components/button/button";

const Signup = () => {

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
            <form action="submit" onSubmit={handleSubmit}>
                <h1>SIGNUP</h1>
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
                <input type="password" name="password" id="password" />
                <br />
                <label htmlFor="password">Confirm Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <Button inputValue={"Sign up"} />
            </form>
        </div>
    );
}

export default Signup;


