import React, { Component } from 'react'
import ReactMarkdown from 'markdown-to-jsx';
import README from '../content/module1.3.md'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from "@material-ui/core/Link"

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1),
  }
})

class PageComponent extends Component {
  constructor(props) {
    super(props)

    this.state = { md: "" }
  }

  componentWillMount() {
    fetch(this.props)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md })
      })
  }

  render() {

    let { md } = this.state
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

    return (
      <div className="post">
        <ReactMarkdown options={options} children={md}/>
      </div>
    )
  }
}

export default PageComponent