import React, { Component } from 'react';
import { ListItem, ListItemText, List, Collapse, withStyles, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const styles = (theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.blue,
    },
    inline: {
      display: 'inline',
    },
    nested: {
        paddingLeft: theme.spacing.unit * 3
    }
  });

export function getItems() {
    var json = {
        list: [
            {
                id: 1,
                title: "What is Covid-19",
                items: [
                    {
                        id: 1,
                        name: "Course of Disease",
                        slug: "Course-of-disease",
                        
                    },
                    {
                        id: 2,
                        name: "Origin",
                        slug: "Origin",
                    },
                    {
                        id:3,
                        name: "Infection Prevention",
                        slug: "infection-pervention",
                    },
                    {
                        id:4,
                        name: "Myths and Misconceptions",
                        slug: "myths-and-misconceptions"
                    },
                    {
                        id:5,
                        name: "Sterotypes and Stigma",
                        slug:"sterotypes-and-stigma"
                    },
                    {
                        id:6,
                        name: "Hygiene Tips",
                        slug:"hygiene-tips"
                    },
                    {
                        id:7,
                        name: "Guidelines to follow",
                        slug:"guidelines-to-follow",
                    },
                    {
                        id:8,
                        name: "UNESCO's initiatives",
                        slug:"unesco-initiatives"
                    },  
                ]
            },
            {
                id: 2,
                title: "Mental Health",
                items: [
                    {
                        id: 1,
                        name: "Defining Mental health",
                        slug:"defining-mental-health"
                    },
                    {
                        id: 2,
                        name: "Importance of Mental health",
                        slug: "importance-of-mental-health"
                    },
                    {
                        id: 3,
                        name: "Different Mental health Problem",
                        slug:"different-mental-health-problem"
                    },
                    {
                        id: 4,
                        name: "Reasons for Stress",
                        slug:"reasons-for-stress"
                    },
                    {
                        id: 5,
                        name: "Stress Vs Depression",
                        slug:"stress-vs-depression"
                    }
                ]
            },
            {
                id: 3,
                title: "Module-3",
                items: [
                    {
                        id: 1,
                        name: "Stress Due To Self-isolation",
                        slug:"stress-due-to-self-isolation"
                        
                    },
                    {
                        id: 2,
                        name: "Routine During Lockdown",
                        slug:"routine-during-lockdown"
                    },
                    {
                        id: 3,
                        name: "Staying away from elderly",
                        slug:"staying-away-from-elderly"
                    },
                    {
                        id: 4,
                        name: "Dealing with the problem",
                        slug:"dealing-with-the-problem"
                    }
                ]
            }, 
            {
                id:4,
                title: "Module-4",
                items: [
                    {
                        id:1,
                        name: "How to Support and interact with Community?",
                        slug:"how-to-support-and-interact-with-community"

                    },
                    {
                        id:2,
                        name: "Reliable source For COVID News",
                        slug:"reliable-source-for-covid-news"
                    },
                    {
                        id:3,
                        name:"How can parents talk to their children about Covid-19?",
                        slug:"how-can-parents-talk-to-their-children-about-covid-19"
                    },
                    {
                        id:4,
                        name: "How can teacher talk to their students about Covid-19?",
                        slug:"how-can-teacher-talk-to-their-students-about-covid-19"
                    }
                ]
            }
        ]
    };
    return json;
}
class NestedList extends Component {
    
    state = {};
    handleClick = e => {
        this.setState({ [e] : !this.state[e]});
    };
    render(){
    const {classes} = this.props
    const items = getItems();
        return(
        <div>
            {items.list.map(list => {
                    return(
                    <List clasesName={classes.root} key={list.id}>
                        <ListItem
                            key={list.title}
                            onClick = {this.handleClick.bind(
                                this,
                                list.title
                            )}
                        > 
                        <ListItemText 
                            primary={list.title}    
                        />
                        {this.state[list.title] ? (
                            <ExpandLess/>
                        ):(
                            <ExpandMore/>
                        )}
                        </ListItem>
                        <Collapse
                          key={list.title}
                          component="nav"
                          in={this.state[list.title]}
                          timeout="auto"
                          unmountOnExit
                        >
                            <List  disablePadding>
                                {list.items.map(
                                    subitem => {
                                    return(
                                        <ListItem
                                            button
                                            key={subitem.id}
                                        >
                                        <Link to={"/" + subitem.slug} key={subitem.slug}>
                                            <ListItemText
                                              key={
                                                  subitem.id
                                              }
                                              secondary={
                                                  <React.Fragment>
                                                      <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.nested}
                                                        color="textPrimary"
                                                        >
                                                          {subitem.name}
                                                      </Typography>
                                                  </React.Fragment>
                                              }
                                            >    
                                            </ListItemText>
                                            </Link>
                                        </ListItem>
                                    )
                                    }
                                )}
                                </List>
                        </Collapse>
                    </List>
                    )
                })}
        </div>
        )
        
    }
}
NestedList.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(NestedList);