"use client"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import { useSession, signIn, signOut } from 'next-auth/react';

const pages = [
  { pageName: 'Importaciones', url: '/importaciones' },
  { pageName: 'Exportaciones', url: '/exportaciones' },
  { pageName: 'Terrestres', url: '/terrestres' },
  { pageName: 'Maestros', url: '/maestros' },];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { data: session, status } = useSession();
  console.log(session)
  console.log(status)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuDesktop pages={pages} />
          <MenuMobile pages={pages} />

          <Box sx={{ flexGrow: 0 }}>

            {
              status && status == 'authenticated' ?
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="" />
                    </IconButton>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Profile</Typography>
                      </MenuItem>
                      <MenuItem onClick={() => signOut()}>
                        <Typography textAlign="center">Signout</Typography>
                      </MenuItem>
                    </Menu>

                  </Tooltip>
                </>
                :
                <MenuItem onClick={() => signIn('azure-ad-b2c')}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar