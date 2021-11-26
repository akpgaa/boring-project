import React, { Component, useState } from 'react'
import Bridge from '../Middleware/Bridge';
import './login.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const HandleLogin = async () => {
        // // let { data: result } = await Bridge.Login({ user: email, pass: password })
        // console.log(result);
        // if (result.length) {
        //     window.location.href = '/'
        // }
    }
    return (
        <body class="text-center">

            <main class="form-signin">

                <img class="mb-4" src="https://picsum.photos/200/300" alt="" width="72" height="57" />
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }} />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={HandleLogin}>Sign in</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>

            </main>



        </body>
    )
}
