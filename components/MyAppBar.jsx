import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const MyAppBar = () => {
  const isMd = useMediaQuery('(min-width:600px)');
  const router = useRouter();
  const pages = [
    {
      title: 'دغدغه ما',
      href: '#priority',
    },
    {
      title: 'خدمات ما',
      href: '#services',
    },
    {
      title: 'طرح ها',
      href: '#plans',
    },
    {
      title: 'از ما بپرس',
      href: '#ask-us',
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        pt: 2,
        px: { xs: 0, md: '5%' },
        width: 'calc(100% + 20px)',
        color: 'black',
      }}
      elevation="0"
      id="app-bar"
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 } }}>
            <Button
              variant="contained"
              sx={{
                color: '#014351',
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: '#014351',
                  color: '#FFF',
                },
              }}
              onClick={() => router.push('https://app.dobaare.com')}
            >
              {`${isMd ? 'ورود به وب اپ' : 'وب اپ'}`}
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                borderWidth: '2px',
                '&:hover': {
                  backgroundColor: '#014351',
                  color: '#FFF',
                },
              }}
              onClick={() => router.push('/blog')}
            >
              {`${isMd ? 'مجله دوباره' : 'مجله'}`}
            </Button>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Box
            sx={{
              display: 'flex',
              direction: 'rtl',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none', position: 'absolute' },
                }}
              >
                {pages.map((p, i) => (
                  <MenuItem
                    key={i}
                    onClick={handleCloseNavMenu}
                    sx={{ direction: 'rtl' }}
                  >
                    <Link href={p.href}>
                      <a
                        style={{
                          color: 'black',
                          textAlign: 'right',
                          direction: 'rtl',
                          cursor: 'pointer',
                        }}
                      >
                        {p.title}
                      </a>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: { xs: 0, md: '28px' },
                cursor: 'pointer',
              }}
              onClick={() => router.push('/')}
            >
              <Image
                src="/logo512.png"
                alt=""
                width="50px"
                height="50px"
                style={{
                  position: 'relative',
                  zIndex: 1000,
                }}
              />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {pages.map((p, i) => {
                return (
                  <Link key={i} href={p.href}>
                    <a
                      style={{
                        color: 'white',
                        fontFamily: 'IRANSansFa',
                        textAlign: 'right',
                        direction: 'rtl',
                        cursor: 'pointer',
                      }}
                    >
                      {p.title}
                    </a>
                  </Link>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default MyAppBar;
