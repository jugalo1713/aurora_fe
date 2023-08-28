import { Box, IconButton, MenuItem, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import MenuIcon from '@mui/icons-material/Menu';
import AuroraLogo from '/public/aurora_icon_bg_transparent.png';
import Menu from '@mui/material/Menu';
import { useState } from "react";

const MenuDesktop = ({pages = {}}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
        <Image className='navbar__logo' alt='Aurora Logo' src={AuroraLogo} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Aurora Desktop
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.pageName} onClick={handleCloseNavMenu}>
                <Link className='navbar__main-links' key={page.pageName} href={page.url} >{page.pageName}</Link>

                {/* <Typography textAlign="center"></Typography> */}
              </MenuItem>
            ))}
          </Menu>
        </Box>
    </>
  )
}

export default MenuDesktop