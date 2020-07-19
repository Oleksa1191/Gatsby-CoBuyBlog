const path = require(`path`);

module.exports = {
    siteMetadata: {
      title: `CoBuy blog`
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: path.join(__dirname, `src`, `images`),
            name: `images`,
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `oelics8qpeys`,
          accessToken: `JOESwzqWyhanFHatkW1RXz2pXNNW0b1KO8Kw5I6O2dc`,
        },
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Lato\:300,400,400i,700`,
            `Open Sans\:300,400,400i,700`, 
          ],
          display: 'swap'
        }
      },
      {
        resolve:  `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images-contentful`,
              options: {
                maxWidth: 600,
                withWebp:true
              }
            },
            {
              resolve: "gatsby-remark-responsive-iframe"
            },
            "gatsby-remark-prismjs",
          ]
        }
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-sharp`
    ]
  }