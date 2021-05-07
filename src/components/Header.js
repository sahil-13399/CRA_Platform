import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router'
import logo from '../CR+A New FINAL Primary.jpeg'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Header() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
            <AppBar position="static" style = {{backgroundColor:'whitesmoke',color:'black',marginBottom:100}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    <img onClick = {() => history.push("/")} src = {logo} height="60" ></img>
                    </Typography>
                    <div className = "NavButton" style = {{display:'flex',justifyContent:'space-between'}}>
                        <Button onClick = {() => history.push("/queue")} style = {{marginRight : 15,fontSize:15}} >Queue</Button>
                        <Button style = {{marginRight : 15,fontSize:15}} >Clients</Button>
                        <Button style = {{marginRight : 15,fontSize:15}} >Materials</Button>
                        <Button onClick = {() => history.push("/quote")} style = {{marginRight : 15,fontSize:15}} >Generate Quote</Button>
                        <Button style = {{fontSize:15}} color="inherit">Log out</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
