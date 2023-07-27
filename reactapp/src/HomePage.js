import React from 'react'
import './HomePage.css'
import {Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import {Logout,Settings} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {FaBars, FaFilter} from 'react-icons/fa'
import QuizIcon from '@mui/icons-material/Quiz';
import logo from './logo.png'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./userSlice";
import { Link } from 'react-router-dom';
function HomePage() {
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
    <>
        <nav>
            <a href="index.html">
              <img src={logo}  width="90" height="60" alt=""></img>
            </a>

            <div>
                <ul id="navbar">
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="/Surveyform">Survey</a></li>
                    <li><a href="/Analysis">Analysis</a></li>
                    <li><a href="/share">Share</a></li>
                    <li><a href="/About">About</a></li>
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
          <Avatar /> {user.name}
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
        <div className="whole-page">
          <div className="left-section">
            <div className='side'>
            <button className='container1'>Folder</button>
            <button className='container1'>My Surveys</button>
            <button className='container1'>Templates</button>
            <button className='container1'>Shared</button>
          </div>
          </div>
       
          <div className="right-section">
            <div className='my'>
              <div className='my1'><FaBars size={30}/>&nbsp;&nbsp;&nbsp;<FaFilter size={30}/></div>
              <div className='my2'><Link to='/Surveyform'><button className='butt'>Create Survey</button></Link></div>
            </div>
            <div className='image1'><img src="https://img.freepik.com/free-vector/feedback-survey-concept-illustration_114360-15500.jpg?w=2000" width="110%" height="350px" alt=""></img> </div>
          <div className='help'><QuizIcon style={{width:"200px", height:"55px", color:"#17cf97"}}/>  <b><p className='help1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Help</p></b></div>
          </div>
        
        </div> 
    </>
  )
}
  
export default HomePage