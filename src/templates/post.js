import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import BlogPostContent from '../components/BlogPostSections/BlogPostContent'
import { SpringFadeUp } from "../utils/animation"
import SEO from "../components/Seo/Seo"

const BlogPostPage = props => {

  const post = props.data.allContentfulBlogPost.edges[0].node;
  console.log(post)
  return (
    <Layout>
        <SEO title={post.title} />
        <PostWrapper>
          <SpringFadeUp>
            <BlogPostContent post={post} />
          </SpringFadeUp>
        </PostWrapper>
    </Layout>
  )
}


export default BlogPostPage



export const contentfulBlogPageQuery = graphql`
  query blogPostPageQuery($id: String!) {
    allContentfulBlogPost(filter: { id: { eq: $id } }) {
      edges {
        node {
          slug
          title
          tags
          image {
            fluid(maxWidth: 800){
              ...GatsbyContentfulFluid_withWebp
            }
          }
          childContentfulBlogPostBodyTextNode {
            childMarkdownRemark {
              id
              html
              excerpt
            }
          }
        }
      }
    }
  }
`

const PostWrapper = styled.div`
  padding-top:96px;
`




