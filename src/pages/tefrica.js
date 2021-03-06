import React from 'react';
import PostCard from '../components/PostCard';
import { graphql } from "gatsby"
import PostsContainer from '../components/PostsContainer';

const TefricaCategory = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <PostsContainer name = "Tefrica">
      <style>
        {`
        
      `}
      </style>
      {
        posts.map((x, i) => {
          let a = '';
          x.node.frontmatter.featuredImage ? a = x.node.frontmatter.featuredImage.childImageSharp.fluid.src : a = ''
          return <PostCard
            key={i}
            title={x.node.frontmatter.title}
            image={a}
            content={x.node.excerpt}
            path={x.node.frontmatter.path}
          />
        })
      }
    </PostsContainer>
  )
}

export const query = graphql`
{
  allMarkdownRemark(limit: 20, filter: {frontmatter: {category: {eq: "tefrica"}}}) {
    edges {
      node {
        excerpt(pruneLength: 70)
        frontmatter {
          title
          path
          featuredImage {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
}
`

export default TefricaCategory;