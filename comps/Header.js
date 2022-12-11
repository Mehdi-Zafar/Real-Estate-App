import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import { useRouter } from 'next/router';
import {GoHome,GoSearch} from 'react-icons/go';
import {GrCart} from 'react-icons/gr'
import {FaRegHandshake} from 'react-icons/fa'
import {BsCart} from 'react-icons/bs'

const pages = [{title:'Home',link:'/',icon:<GoHome/>},{title:'Search',link:'/search',icon:<GoSearch/>}, {title:'Buy Property',link:'/buy-property',icon:<BsCart/>},{title:'Rent Property',link:'/rent-property',icon:<FaRegHandshake/>}];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
    const router = useRouter();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HouseOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Real Estate
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
                <MenuItem 
                key={page.link} 
                onClick={()=>{
                  handleCloseNavMenu()
                  router.push(page.link)
                  }}>
                  <Typography textAlign="center">{page.icon}&nbsp;{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <HouseOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Real Estate
          </Typography>
          
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' },marginLeft:"auto" }}>
            {pages.map((page) => (
              <Button
                key={page.link}
                onClick={()=>router.push(page.link)}
                sx={{ my: 2,mx:1.5,fontWeight: 500, color: 'inherit',fontSize:"1.03rem", display: 'flex',alignItems:'center','&:hover':{color:"#162719"} }}
              >
                {page.icon}&nbsp;{page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default Header;