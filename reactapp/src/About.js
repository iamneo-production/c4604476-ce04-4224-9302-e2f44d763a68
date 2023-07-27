import React from 'react'
import './About.css'
import {Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import {Logout,Settings} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import logo from './logo.png'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./userSlice";
function About() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
         <nav>
            <a href="index.html">
              <img src={logo}  width="90" height="60" alt=""></img>
            </a>

            <div>
                <ul id="navbar">
                    <li><a  href="/home">Home</a></li>
                    <li><a href="/Surveyform">Survey</a></li>
                    <li><a href="/Analysis">Analysis</a></li>
                    <li><a href="/share">Share</a></li>
                    <li><a className="active" href="/About">About</a></li>
                     <li><a href="/Contact">Contact</a></li>
                     <Box sx={{ flexGrow: 0 }}>
                     <li>
                      <IconButton
                        onClick={handleClick} sx={{ p: 0}}
                        size="small"
                      >
                      <Avatar sx={{ width: 42, height: 42 ,bgcolor : "black"  }}></Avatar>
                      </IconButton></li></Box>
                </ul>
                <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> My Account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <FavoriteIcon>
            <Settings fontSize="small" />
          </FavoriteIcon>
          &nbsp;&nbsp;&nbsp;Favorites
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <BookmarkBorderIcon>
            <Settings fontSize="small" />
          </BookmarkBorderIcon>
          &nbsp;&nbsp;&nbsp;BookMarks
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon><a href="/" style={{textDecoration:'none'}}>
          <div className='logout'>Logout</div></a>
        </MenuItem>
      </Menu>
            </div>
        </nav>
        <div id='desktop-2' className='desktop-2'>
<div id='rectangle3' className='rectangle3'>
</div><b>
<div className='jyothiraam'>
Name: Jyothiraam S R   
Email: abc@gmail.com
</div>
<div i className='indhuprakash'>
Name: Indhuprakash T M
Email:abc@gmail.com
</div></b>
<div id='aboutus' className='aboutus' >
ABOUT US</div>
<div  className='content'>
Survey+
is an Survey and marketing automations platform for growing businesses. We empower millions of customers around the world to start and grow their businesses with world-class marketing technology, award-winning customer support, and inspiring content. Survey+ puts data-backed recommendations at the heart of your marketing and surveys, so you can find and engage customers across email, social media, landing pages, and advertising—automatically and with the power of AI.</div>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
<div id='creaters:' className='creaters' style={{fontFamily:"Audiowide"}}>
CREATERS:</div>
<b>
<div id='name:imayeshmemail:abc@gmail.comlinkedin:instagram:' className='imayesh' >
Name: Imayesh M
Email:abc@gmail.com</div></b>
</div>

    </div>
  )
}

export default About