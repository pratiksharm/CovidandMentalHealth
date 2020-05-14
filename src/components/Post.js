import React from 'react';
import Markdown from 'markdown-to-jsx'
import { useParams } from 'react-router';
import {Typography, withStyles, Link} from "@material-ui/core"

const postsData = require("./posts.json");


function findPostBySlug(slug) {
    return postsData.find(o => o.slug === slug);
} 

const styles = theme => ({
    listItem: {
      marginTop: theme.spacing(1),
    }
})
export default function Post() {
    const options = { 
        overrides: { 
          h1: { component: props => <Typography gutterBottom variant="h4" {...props} /> }, 
          h2: { component: props => <Typography gutterBottom variant="h6" {...props} /> }, 
          h3: { component: props => <Typography gutterBottom variant="subtitle1" {...props} /> }, 
          h4: { component: props => <Typography gutterBottom variant="caption" paragraph {...props} /> }, 
          p: { component: props => <Typography paragraph {...props} /> }, 
          a: { component: Link }, 
          li: { 
            component: withStyles(styles)(({ classes, ...props }) => ( 
              <li className={classes.listItem}> 
                <Typography component="span" {...props} /> 
              </li> 
            )), 
          }, 
        }, 
      }; 
    var { slug } = useParams(),
    post = findPostBySlug(slug);
    return(
        <div >
            <h1 className="title">{post.title}</h1>
            <Markdown options={options}>{post.content}</Markdown>
        </div>
    )
}


