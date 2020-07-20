import { graphql, useStaticQuery } from "gatsby"

const useFeaturedBlogPost = () => {
  const { allContentfulBlogPost } = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(filter: {featured: {eq: true}}) {
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
  return allContentfulBlogPost?.edges[0]?.node
}
export default useFeaturedBlogPost