import Image from 'next/image'

export const BackgroundImage = ({imgSrc, alt, imgOpacity}) => {
    return (
        <div className='login-background'>
            <Image
                alt={alt}
                src={imgSrc}
                className={`login-background__image ${imgOpacity}`}
             />
        </div>
    )
}
