import React from 'react'
import '../App.css'
import '../styles.css'
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { IconButton, Menu } from '@material-ui/core';
import { Divider, ListItemIcon, MenuItem } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { AccountCircleRounded } from '@material-ui/icons';
// import { NavLink } from 'react-router-dom';


function AppTopBar() {

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
                <IconButton
                    className='avatar'
                    onClick={handleClick}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}>
                    <AccountCircleRoundedIcon sx={{ fontSize: 42, color: 'white' }} />
                </IconButton>
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
                    {/* <NavLink to='/'> */}
                    <MenuItem className='menu'>
                        <ListItemIcon>
                          <AccountCircleRoundedIcon /> 
                        </ListItemIcon>
                        My account
                    </MenuItem>
                    {/* </NavLink> */}
                    <Divider />
                    {/* <Link to='/' style={{textDecoration:'none', color:'black'}}> */}
                      <MenuItem>
                          <ListItemIcon>
                              <Logout fontSize="small" />
                          </ListItemIcon>
                          Logout
                      </MenuItem>
                    {/* </Link> */}
                </Menu>
        </>
     );
}

export default AppTopBar;