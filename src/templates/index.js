import React from 'react';
import { graphql } from 'gatsby';
import SEO from "../components/Seo/Seo"
import Layout from '../components/Layout/Layout'
import { CardListing } from '../components/BlogListing/CardListing/CardListing'
import Pagination from '../components/Pagination/Pagination'



const BlogMainPage = props => {

  const cardsData = props.data.allContentfulBlogPost.edges

  return (
    <Layout>
      <SEO title='Blog Home page' />
      <CardListing cardsData={cardsData} ></CardListing>
      <Pagination pageContext={props?.pageContext} />
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




