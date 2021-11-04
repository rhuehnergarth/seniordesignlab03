import React from 'react'

export default function login() {
    return (
        <div>
            <label>
                Username
                <input type="text" name="username"/><br />
            </label>
            <label>
                Password
                <input type="password"name="password"/><br />
            </label>
            <button id = "login"> Login </button>
        </div>
    )
}