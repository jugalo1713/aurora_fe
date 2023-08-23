"use client"

import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import axios from 'axios';
//import BeskarLogo from "../../public/icon_beskar.png"
import AuroraLogo from '../../public/aurora_name_top-transparent.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export const LoginForm = () => {

    const router = useRouter();

    const handleForm = (e) => {
        e.preventDefault();

        var user = e.target.user.value;
        var password = e.target.password.value;

        const url = `https://beskar-aurora-be.azurewebsites.net/login?user=${user}&password=${password}`;

        axios.post(url)
            .then(function (response) {
                router.push('/first')
            })
            .catch(function (error) {
                console.log(error);
            });
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
                />
                <TextField
                    required
                    id="password"
                    label="Password"
                    className='login-form__input'
                    type='password'
                    name='password'
                />
                <Button type='submit' variant="contained">Sign In</Button>
            </form>
        </div>
    )
}

