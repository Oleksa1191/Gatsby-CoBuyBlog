import { graphql, useStaticQuery } from "gatsby"

const useLatestBlogPosts = () => {
  const { allContentfulBlogPost } = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(limit: 3, sort: {fields: createdAt, order: DESC}) {
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
  )
  return allContentfulBlogPost?.edges
}
export default useLatestBlogPosts