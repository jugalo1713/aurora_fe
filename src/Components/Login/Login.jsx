import { BackgroundImage } from './BackgroundImage'
import { LoginForm } from './LoginForm'
import LoginImage from '/public/container-vessel.jpg'

export const Login = () => {
    return (
        <>
            <BackgroundImage imgSrc={LoginImage} alt={'Barco'} imgOpacity={'u-image-opacity-small'} />
            <LoginForm />
        </>
    )
}
