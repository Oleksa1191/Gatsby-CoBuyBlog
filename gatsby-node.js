const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  

  
   /* ======================================================================== */
   
   /* Create pages from Read Listing Template */
   const blogListingPage = new Promise((resolve, reject) => {
    graphql(`
      query {
        allContentfulBlogPost {
            edges {
              node {
                slug
                tags
              }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      const blogListingData = result.data.allContentfulBlogPost.edges
      const blogCardsPerPage = 6
      const numPages = Math.ceil(blogListingData.length / blogCardsPerPage)
        
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/` : `/${i + 1}`,
          component: path.resolve(`./src/templates/index.js`),
          context: {
            limit: blogCardsPerPage,
            skip: i * blogCardsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })
  
      
  
      resolve()
    })
  })
  
   
    
    /* ======================================================================== */
    /* Create pages from Read Page Template */
  
    const blogPage = new Promise((resolve, reject) => {
      graphql(`
        query {
          allContentfulBlogPost {
            edges {
              node {
                slug
                tags
                id
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
  
        result.data.allContentfulBlogPost.edges.forEach((edge, index) => {
          createPage({
            path: `${edge.node.slug}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              id: `${edge.node.id}`,
              currentTag: `${edge.node.tags[0]}`,
            },
          })
        })
        resolve()
      })
    })
  
    
  
    return Promise.all([
      blogListingPage,
      blogPage
    ])
  }