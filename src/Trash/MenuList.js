import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {ListItem, ListItemIcon, ListItemText, ListSubheader, Collapse, List} from '@material-ui/core'
import {ExpandLess, ExpandMore} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
}));

export default function MainListItems() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    }
    return(
    <div>
        <ListItem button onClick= {handleClick}>
            <ListItemText primary='What is  COVID-19'/>
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Course of Disease" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Origin" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Infection Prevention" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Myths and Misconceptions" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Sterotypes and Stigma" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Hygiene tips" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText display="flex" flexWrap="wrap"  primary="Guidelines for students,parenst and teachers" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="UNESCO's initiatives" />
          </ListItem>
        </List>
      </Collapse>
        <ListItem button onClick={handleClick}>
            <ListItemText primary='Mental Health'/>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
        <ListItem button>
            <ListItemText primary='Module3'/>
        </ListItem>
        <ListItem button>
            <ListItemText primary='Module4'/>
        </ListItem>
        <ListItem button>
            <ListItemText primary='Module5'/>
        </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </div>
    )
}