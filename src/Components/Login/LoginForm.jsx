"use client"

import Button from '@mui/material/Button';
import axios from 'axios';
//import BeskarLogo from "../../public/icon_beskar.png"
import AuroraLogo from '/public/aurora_name_top-transparent.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export const LoginForm = () => {

    const router = useRouter();

    const handleForm = (e) => {
        e.preventDefault();

        router.push('/api/auth/signin')
    }

    return (
        <div className='login-form u-center'>
            <Image
                src={AuroraLogo}
                alt="Beskar Dev logo"
                className='login-form_logo'
            />
            <form className='login-form__form' onSubmit={(e) => { handleForm(e) }}>
                <Button className='login-form__submit-button' type='submit' variant="contained">Log In</Button>
            </form>
        </div>
    )
}

