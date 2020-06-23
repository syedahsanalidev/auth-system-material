import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Button, Drawer, List, Divider,
    ListItem, ListItemIcon, ListItemText,  IconButton} from '@material-ui/core';
    import Toolbar from '@material-ui/core/Toolbar';
    import Typography from '@material-ui/core/Typography';
    import MenuIcon from '@material-ui/icons/Menu';
    import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
    import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
    import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
    
    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    }));
    
    
    export default () =>
    {
        const classes = useStyles();
        const [state, setState] = React.useState({
            top: false,
            left: false,
            bottom: false,
            right: false,
        });
        const [isLoggedIn, setLogin] = React.useState(false);
        const toggleDrawer = (side, open) => event => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
            
            setState({ ...state, [side]: open });
        };
        
        const sideList = side => (
            <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
            >
            <List>
            <ListItem button key="profile">
            <ListItemIcon><AccountCircleOutlinedIcon/></ListItemIcon>
            <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button key="settings">
            <ListItemIcon><SettingsOutlinedIcon/></ListItemIcon>
            <ListItemText primary="Settings" />
            </ListItem>
            </List>
            <Divider />
            <List>
            <ListItem button key="logout" onClick={() => setLogin(false)} className={!isLoggedIn ? "d-none" : ""}>
            <ListItemIcon><ExitToAppOutlinedIcon/></ListItemIcon>
            <ListItemText primary="Logout" />
            </ListItem>
            </List>
            </div>
            );
            
            return(
                <div>
                <AppBar position="static">
                <Toolbar>
                <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} 
                color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                React Material UI
                </Typography>
                <Button color="inherit" onClick={() => setLogin(true)} className={isLoggedIn ? "d-none" : ""}>Login</Button>
                </Toolbar>
                </AppBar>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
                </Drawer>
                </div>
                )
            }