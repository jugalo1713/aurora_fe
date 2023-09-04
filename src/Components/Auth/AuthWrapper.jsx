import Navbar from '../Layout/Navbar/Navbar'

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { useEffect } from 'react';

const AuthWrapper = ({ children }) => {
    const router = useRouter();

    const { status: sessionStatus } = useSession();
    const authorized = sessionStatus === 'authenticated';
    const unAuthorized = sessionStatus === 'unauthenticated';
    const loading = sessionStatus === 'loading';


    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default AuthWrapper