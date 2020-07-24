import React from 'react';
import { graphql } from 'gatsby';
import SEO from "../components/Seo/Seo"
import Layout from '../components/Layout/Layout'
import { CardListing } from '../components/BlogListing/CardListing/CardListing'
import Pagination from '../components/Pagination/Pagination'
import useLatestsPost from "../hooks/useLatestsPost"
import LatestPosts from "../components/LatestPosts/LatestPosts"
import { SpringFadeUp, TrailFadeUp } from "../utils/animation"

const BlogMainPage = props => {
  const currentPage = props.pageContext.currentPage
  const cardsData = props.data.allContentfulBlogPost.edges
  const latestPosts = useLatestsPost()

  const latest_posts = currentPage === 1  && (
    <LatestPosts
      latestPosts={latestPosts}
    />
  )
  return (
    <Layout>
      <SEO title='Blog Home page' />
      <SpringFadeUp>
        {latest_posts}
        <CardListing cardsData={cardsData} ></CardListing>
        <Pagination pageContext={props?.pageContext} />
      </SpringFadeUp>
      
    </Layout>
  )
}


export default BlogMainPage



export const contentfulBlogPageQuery = graphql`
  query blogMainPageQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(skip: $skip, limit: $limit, filter: {hidden: {nin: true}}) {
      edges {
        node {
          slug
          title
          tags
          image {
            fluid(maxWidth: 400){
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




