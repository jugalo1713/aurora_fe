import Link from "next/link"

export const NavbarItem = ({url, pageName}) => {
  return (
    <>
        <Link className='navbar__main-links' key={url} href={url} >{pageName}</Link>
    </>
  )
}
