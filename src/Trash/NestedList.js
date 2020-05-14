import React from "react";
import PropTypes from "prop-types";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        background: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    }
});
function getItems() {
    var json = {
        list: [
            {
                id: 1,
                title: "What is Covid-19",
                items: [
                    {
                        id: 1,
                        name: "Course of Disease",
                        
                    },
                    {
                        id: 2,
                        name: "Origin"
                    },
                    {
                        id:3,
                        name: "Infection Prevention"
                    },
                    {
                        id:4,
                        name: "Myths and Misconceptions"
                    },
                    {
                        id:5,
                        name: "Sterotypes and Stigma"
                    },
                    {
                        id:6,
                        name: "Hygiene Tips"
                    },
                    {
                        id:7,
                        name: "Guidelines to follow"
                    },
                    {
                        id:8,
                        name: "UNESCO's initiatives"
                    },  
                ]
            },
            {
                id: 2,
                title: "Mental Health",
                items: [
                    {
                        id: 1,
                        name: "Defining Mental health"
                    },
                    {
                        id: 2,
                        name: "Importance of Mental health",
                    },
                    {
                        id: 3,
                        name: "Different Mental health Problem",
                    },
                    {
                        id: 4,
                        name: "Reasons for Stress",
                    },
                    {
                        id: 5,
                        name: "Stress Vs Depression",
                    }
                ]
            },
            {
                id: 3,
                title: "Module-3",
                items: [
                    {
                        id: 1,
                        name: "Stress Due To Self-isolation"
                    },
                    {
                        id: 2,
                        name: "Routine During Lockdown"
                    },
                    {
                        id: 3,
                        name: "Staying away from elderly"
                    },
                    {
                        id: 4,
                        name: "Dealing with the problem"
                    }
                ]
            }, 
            {
                id:4,
                title: "Module-4",
                items: [
                    {
                        id:1,
                        name: "How to Support and interact with Community?"
                    },
                    {
                        id:2,
                        name: "Reliable source For COVID News"
                    },
                    {
                        id:3,
                        name:"How can parents talk to their children about Covid-19?"
                    },
                    {
                        id:4,
                        name: "How can teacher talk to their students about Covid-19?"
                    }
                ]
            }
        ]
    };
    return json;
}
class NestedList extends React.Component {
    state = {};
    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };
    render() {
        const items = getItems();
        const { classes } = this.props;
        return (
            <div>
                {items.list.map(list => {
                    return (
                        <List
                            className={classes.root}
                            key={list.id}
                            subheader={
                                <ListSubheader>{list.title}</ListSubheader>
                            }
                        >
                            {list.items.map(item => {
                                return (
                                    <div key={item.id}>
                                        {item.subitems != null ? (
                                            <div key={item.id}>
                                                <ListItem
                                                    button
                                                    key={item.id}
                                                    onClick={this.handleClick.bind(
                                                        this,
                                                        item.name
                                                    )}
                                                >
                                                    <ListItemText
                                                        primary={item.name}
                                                    />
                                                    {this.state[item.name] ? (
                                                        <ExpandLess />
                                                    ) : (
                                                        <ExpandMore />
                                                    )}
                                                </ListItem>
                                                <Collapse
                                                    key={list.items.id}
                                                    component="li"
                                                    in={this.state[item.name]}
                                                    timeout="auto"
                                                    unmountOnExit
                                                >
                                                    <List disablePadding>
                                                        {item.subitems.map(
                                                            sitem => {
                                                                return (
                                                                    <ListItem
                                                                        button
                                                                        key={
                                                                            sitem.id
                                                                        }
                                                                        className={
                                                                            classes.nested
                                                                        }
                                                                    >
                                                                        <ListItemText
                                                                            key={
                                                                                sitem.id
                                                                            }
                                                                            primary={
                                                                                sitem.name
                                                                            }
                                                                        />
                                                                    </ListItem>
                                                                );
                                                            }
                                                        )}
                                                    </List>
                                                </Collapse>{" "}
                                            </div>
                                        ) : (
                                            <ListItem
                                                button
                                                onClick={this.handleClick.bind(
                                                    this,
                                                    item.name
                                                )}
                                                key={item.id}
                                            >
                                                <ListItemText
                                                    primary={item.name}
                                                />
                                            </ListItem>
                                        )}
                                    </div>
                                );
                            })}
                            <Divider key={list.id} absolute />
                        </List>
                    );
                })}
            </div>
        );
    }
}
NestedList.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NestedList);
