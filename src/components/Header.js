import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    CR&A
                    </Typography>
                    <div className = "NavButton" style = {{justifyContent:'space-around'}}>
                        <Button color="inherit">Queue</Button>
                        <Button color="inherit">Clients</Button>
                        <Button color="inherit">Materials</Button>
                        <Button color="inherit">Generate Quote</Button>
                        <Button color="inherit">Log out</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
