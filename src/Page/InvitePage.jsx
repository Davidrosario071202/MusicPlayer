import { Button, Card, IconButton, Typography } from '@material-ui/core';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
  root: {
    position: "absolute",left: "5.5%", bottom: "28%"
  },
  root1: {
    position: "absolute",left: "40.5%", bottom: "28%"
  },
  root2: {
    position: "absolute",left: "80.5%", bottom: "28%"
  },
  button1: {
    position: "absolute",top: "78%",left: "10.5%",right: "70%",color: "white", fontSize: "20px"
  },
  button2: {
    position: "absolute",top: "78%",left: "47.5%",right: "70%",color: "white", fontSize: "20px"
  },
  button3: {
    position: "absolute",top: "78%",left: "85.5%",right: "70%",color: "white", fontSize: "20px"
  },
}));

export default function InvitePage() {
    const classes = useStyles();

    return (
        <>
              <Typography variant='h4' className={classes.name}>Invite A Friend !</Typography>
            <div>
              <a href='https://web.whatsapp.com/'>
              <Button className={classes.root}>
              <Card 
              style = {{boxShadow:"none"}}>
                <CardMedia
                  className={classes.cover}
                  image="https://t3.ftcdn.net/jpg/05/01/71/78/360_F_501717879_7RWecs3TL0zVJJXd7QAWzn39Z2CbEr4C.jpg" 
                  />
              </Card>
              </Button>
              </a>
              <Typography className={classes.button1}>Whatsapp</Typography>
            </div>
            <div>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=new'>
            <Button className={classes.root1}>
            <Card 
              style = {{boxShadow:"none"}}>
                <CardMedia
                  className={classes.cover}
                  image="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png" 
                  />
              </Card>
              </Button>
              </a>
              <Typography className={classes.button2}>Mail</Typography>
            </div>
            <div>
            <a href='https://www.instagram.com/accounts/login/'>
            <Button className={classes.root2}>
            <Card 
              style = {{boxShadow:"none"}}>
                <CardMedia
                  className={classes.cover}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHIpwTBbuNCH-7-FhtZ_zDFCO51L6o1F4tw&usqp=CAU" 
                  />
              </Card>
              </Button>
            </a>
              <Typography className={classes.button3}>Instagram</Typography>
            </div>
        </>     
    );
}