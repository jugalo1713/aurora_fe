"use client"

import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import axios from 'axios';
//import BeskarLogo from "../../public/icon_beskar.png"
import AuroraLogo from '../../public/aurora_name_top-transparent.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';


export const LoginForm = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault();

        // var user = e.target.user.value;
        // var password = e.target.password.value;

        debugger;

        const { result, error } = await signIn(user, password);

        if (error) {
            return console.log(error)
        }

        console.log(result)
        return router.push("/first")

        // var user = e.target.user.value;
        // var password = e.target.password.value;

        // const url = `https://beskar-aurora-be.azurewebsites.net/login?user=${user}&password=${password}`;

        // axios.post(url)
        //     .then(function (response) {
        //         router.push('/first')
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    return (
        <div className='login-form u-center'>
            <Image
                src={AuroraLogo}
                alt="Beskar Dev logo"
                className='login-form_logo'
            />
            <form className='login-form__form' onSubmit={(e) => { handleForm(e) }}>
                <TextField
                    required
                    id="user"
                    label="User"
                    className='login-form__input'
                    type='email'
                    name='email'
                    onChange={(e) => setUser(e.target.value ?? '')}
                />
                <TextField
                    required
                    id="password"
                    label="Password"
                    className='login-form__input'
                    type='password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value ?? '')}
                />
                <Button type='submit' variant="contained">Sign In</Button>
            </form>
        </div>
    )
}

