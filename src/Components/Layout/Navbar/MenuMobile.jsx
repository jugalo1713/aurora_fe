import { Box, Typography } from "@mui/material"
import { NavbarItem } from "./NavbarItem"
import Image from "next/image"
import AuroraLogo from '/public/aurora_icon_bg_transparent.png';
import { useState } from "react";

const MenuMobile = ({pages = {}}) => {
 
  return (
    <>
         <Image className='navbar__logo-mobile' alt='Aurora Logo' src={AuroraLogo} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Aurora Mobile
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <NavbarItem key={page.pageName} url={page.url} pageName={page.pageName} />
          ))}
        </Box>
    </>
  )
}

export default MenuMobile