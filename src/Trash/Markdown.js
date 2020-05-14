import React from 'react'
import Markdown from 'markdown-to-jsx'
import postlist from '../posts.json'
const MyParagraph = ({children, ...props}) => (
    <div {...props}>{children}</div>
)

const MarkdownFile = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ")
    })
    return (
        <Markdown
            options= {{
                overrides: {
                    h1: {
                        component: MyParagraph,
                        props: {
                            className: 'foo',
                        }
                    }
                }
            }}>{postlist[0].content}
        </Markdown>
      );
}
 
export default MarkdownFile;
