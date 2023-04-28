import React from "react";
import "./login.css";
import Button from "../../components/button/button";

const Signup = () => {
    return (
        <div className="loginbox">
            <form action="submit">
                <h1>SIGNUP</h1>
                <label htmlFor="userName">Username</label>
                <input type="text" name="userName" id="username" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <br />
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="password1" id="password1" />
                <br />
                <br />
                <Button inputValue={"Sign up"} />
            </form>
        </div>
    );
}

export default Signup;