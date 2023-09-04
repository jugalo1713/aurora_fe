import Navbar from '../Layout/Navbar/Navbar'

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { useEffect } from 'react';
import { Login } from '../Login/Login';

const AuthWrapper = ({ children }) => {
    const router = useRouter();

    const { status: sessionStatus } = useSession();
    const authorized = sessionStatus === 'authenticated';
    const unAuthorized = sessionStatus === 'unauthenticated';
    const loading = sessionStatus === 'loading';

    useEffect(() => {
        // check if the session is loading or the router is not ready
        if (loading || !router.isReady) return;

        // if the user is not authorized, redirect to the login page
        // with a return url to the current page
        if (unAuthorized) {
            console.log('not authorized');
            router.push({
                pathname: '/',
                query: { returnUrl: router.asPath },
            });
        }
    }, [loading, unAuthorized, sessionStatus, router]);

    if (loading) {
        return <>Loading app...</>;
    }

    return authorized ?
        //return true ?
        <div>
            <Navbar />
            {children}
        </div>
        :
        <>
            <Login />
        </>;
}

export default AuthWrapper
