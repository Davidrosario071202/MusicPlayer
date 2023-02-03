import { Button, IconButton, Typography } from '@material-ui/core';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
// import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 200,width: 200,position: 'absolute',left: "5%",top: "15%"
  },
  cover: {
    width: 200,height: 200
  },
  name: {
    textAlign: "center", top: "17%", color:'white', marginLeft:'3%'
  },
  avatarian: {
    position: "absolute",left: "43.5%", bottom: "48%"
  },
  username: {
    position: "absolute", left: "47%", bottom: "40%", color:'white'
  },
  button1: {
    position: "absolute",top: "68%",left: "10.5%",right: "70%",color: "white", fontSize: "23px"
  },
  invite: {
    position: "absolute",top: "68%",left: "47.5%",right: "70%",color: "white", fontSize: "20px"
  },
  button2: {
    position: "absolute",top: "68%",left: "77.5%",right: "70%",color: "white", fontSize: "20px"
  }
}));

export default function ProfilePage() {
    const classes = useStyles();

    return (
        <>
                <Typography variant='h4' className={classes.name}>My Profile</Typography>
            <div>
            <IconButton className={classes.avatarian}>
                    <AccountCircleRoundedIcon
                        sx={{
                            color: 'white',
                            fontSize: 150,
                        }}
                    />
                </IconButton>
            </div>
            <div>
                <Typography variant='h4' className={classes.username}>Gokul</Typography>
                <Typography variant='h4' className={classes.button1}>OPTIONS :</Typography>
                <NavLink to='/invite'>
                <Button className={classes.invite}>Invite</Button>
                </NavLink>
                {/* <NavLink to='/'> */}
                <Button className={classes.button2}>Logout</Button>
                {/* </NavLink> */}
            </div>
        </>     
    );
}