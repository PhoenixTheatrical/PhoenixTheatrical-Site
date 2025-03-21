import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allMdx.nodes.map(node => (
                        <li key={node.id}>
                            <h2> {node.frontmatter.title} </h2>
                            <p> Posted: {node.frontmatter.date} </p>
                            <p> {node.excerpt} </p>
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx {
      nodes {
        frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage