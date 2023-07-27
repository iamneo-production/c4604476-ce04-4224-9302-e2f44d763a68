import React from 'react'
import './Contact.css'
import './Navbar.css'
import logo from './logo.png'
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import {Logout,Settings} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./userSlice";

function Contact() {

  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <>
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
                    <li><a href="/About">About</a></li>
                     <li><a className="active" href="/Contact">Contact</a></li>
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
<br/><br/><br/>
    </div>
    <div className='first'><h1>Get in touch with us</h1></div>
    <br/>
    <div className='second'><h2>Need help on something? Get in touch with us through the correct channels</h2>
    <h2> below and we will get back to you as soon as possible</h2></div>
    <div style={{display:'flex',alignItems:'center'}}>
    <div className='box1'>
        <h1>Contact Support Team</h1><br/>
        <p>Contact our Support Team for your questions and requests. We will reply as soon as possible to help you with care. </p><br/><br/>
        <a href="https://www.gmail.com/"><button className='cs'>Contact Support</button></a>
    </div>
    <div className='box2'>
    <h1>Report Abuse</h1><br/>
        <p>Encountered a malicious form that was created on forms.app? Share it with us and we will take action as soon as possible.</p><br/><br/>
        <button className='cs'>Report Abuse</button>
    </div>
    </div>
    </>
  )
}

export default Contact