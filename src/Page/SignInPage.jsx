import { Button, FormControlLabel, Checkbox, Typography, makeStyles, Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import '../styles.css';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight:"100%",
  },
  typography: {
    fontSize: "15px",
  },
  submit: {
    textDecoration: 'none',
    marginTop: '15px',
    marginBottom: '18px'
  },
  
}));



function SigninPage() {

  const classes = useStyles();
  return ( 
    <>
      <div className={classes.outerContainer} id="outerContainer">
        <div className={classes.paper} id='paper' >
          <form className='form-root'>
          <TextField
            variant='outlined'
            margin= 'normal'
            required
            fullWidth  
            id='email'
            label= 'Email Address'
          />
          <TextField 
            variant='outlined'
            margin= 'normal'
            required
            fullWidth  
            id='email'
            label= 'Password'
            type='password'
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Link to='main'  className={classes.submit}>
          <Button
            className={classes.submit}
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            >
              Sign in
          </ Button>
          </ Link>
          <Typography
          className={ classes.typography }
          >
            <Grid container>
              {/* <Grid item xs >
                forgot password?
              </Grid > */}
              <Grid item >
                <Link to='/signup' style={{textDecoration:'none'}}> Don't have an account? Sign Up </Link>
              </Grid >
            </Grid>
          </Typography>
          </form>

        </div>
      </div>
    </>
   );
}

export default SigninPage;