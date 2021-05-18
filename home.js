import React from 'react';
import { Link} from "react-router-dom";
import { GiClover } from "react-icons/gi";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {red} from '@material-ui/core/Colors';
//import {Card,CardContent,CardActions,CardHeader} from '@material-ui/core';
import {Home,Person,Favorite,Chat,Grade,Face,Info} from '@material-ui/icons';
//import MailIcon from '@material-ui/icons/Mail';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import ShareIcon from '@material-ui/icons/Share';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
//import Collapse from '@material-ui/core/Collapse';
//import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
//import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
//import Cardi from "./Card.js";     

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
    root1: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },

}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className="navebarr__first-logo">
          <GiClover/>
          </div>
          <div>
          <Typography variant="h6" noWrap>
            Matrimony.com
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        
        	<Link to="/myprofile">
            <ListItem button>
              <ListItemIcon><Person/></ListItemIcon>
              <ListItemText primary="My Profile"/>
            </ListItem>
            </Link>
            <Link to="/menu">
            <ListItem button>
              <ListItemIcon><Person/></ListItemIcon>
              <ListItemText primary="Menu"/>
            </ListItem>
            </Link>

            <Link to ="/fav">
            <ListItem button> 
              <ListItemIcon><Favorite/></ListItemIcon>
              <ListItemText primary="My Favorite"/>
            </ListItem>
            </Link>
            <Link to = "/chatting">
            <ListItem button>
              <ListItemIcon><Chat/></ListItemIcon>
              <ListItemText primary="Chats"/>
            </ListItem>
            </Link>
            <Link to = "/premium">
            <ListItem button>
              <ListItemIcon><Grade/></ListItemIcon>
              <ListItemText primary="Premium"/>
            </ListItem>
            </Link>
            <Link to="/aboutpage">
            <ListItem button>
              <ListItemIcon><Info/></ListItemIcon>            
              <ListItemText primary="About"/>            
            </ListItem>
            </Link>

             <Link to="/login">
            <ListItem button>
              <ListItemIcon><Info/></ListItemIcon>            
              <ListItemText primary="Login"/>            
            </ListItem>
            </Link>

             <Link to="/register">
            <ListItem button>
              <ListItemIcon><Info/></ListItemIcon>            
              <ListItemText primary="Register"/>            
            </ListItem>
            </Link>
        </List>
        <Divider />
        <List>      
        <Link to="/Register">
        	<ListItem button>        	 
              <ListItemIcon><Face/></ListItemIcon>            
              <ListItemText primary="Logout" />            
            </ListItem> 
           </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        

      </main>
    </div>
  );
}

