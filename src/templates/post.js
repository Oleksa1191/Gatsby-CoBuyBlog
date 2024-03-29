import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import BlogPostContent from '../components/BlogPostSections/BlogPostContent'
import LatestPosts from "../components/LatestPosts/LatestPosts"
import useLatestsPost from "../hooks/useLatestsPost"
import SEO from "../components/Seo/Seo"

const BlogPostPage = props => {
  
  const post = props.data.allContentfulBlogPost.edges[0].node;
  const latestPosts = useLatestsPost()
  return (
    <Layout>
        <SEO title={post.title} />
        <PostWrapper>
            <BlogPostContent location={props.location} post={post} />
        </PostWrapper>
        <LatestPosts
          latestPosts={latestPosts}
        />
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
          createdAt(formatString: "MMMM DD, YYYY")
          authorInfo {
            name
            image {
              fixed(width: 64, height: 64) {
                ...GatsbyContentfulFixed_withWebp
              }
            } 
          }
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
              timeToRead
            }
          }
        }
      }
    }
  }
`

const PostWrapper = styled.div`
  padding-top:96px;
  max-width:970px;
  margin:0 auto;
`




