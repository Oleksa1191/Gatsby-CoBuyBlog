
module.exports = {
    siteMetadata: {
      title: `CoBuy blog`,
      description:
      "CoBuy blog.",
      url: "https://blog.gocobuy.com/", // No trailing slash allowed!
      image: "/cobuy.png", // Path to your image you placed in the 'static' folder
      twitterUsername: "@occlumency",
      author: "CoBuy Team"
    },
    plugins: [
      {
        // keep as first gatsby-source-filesystem plugin for gatsby image support
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/static/`,
          name: 'uploads',
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
            `Quicksand\:300,400,400i,500,700`,
            `Roboto\:300,400,400i,500,700`,
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
              resolve:`gatsby-remark-responsive-iframe`
            },
            `gatsby-remark-prismjs`,
            `gatsby-remark-reading-time`,
            {
              resolve: "gatsby-remark-embed-video",
              options: {
                width: 800,
                ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                height: 400, // Optional: Overrides optional.ratio
                related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              }
            }
          ]
        }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-cobuy-blog`,
          short_name: `cobuy-blog`,
          start_url: `/`,
          display: `minimal-ui`,
          icon: `src/images/logo-medium.png`, // This path is relative to the root of the site.
        },
      },
      {
        resolve: `gatsby-plugin-facebook-pixel`,
        options: {
          pixelId: "682416605852271",
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            // The property ID; the tracking code won't be generated without it
            trackingId: "UA-86661345-1",
            head: true,
        },
    },
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-sharp`,
      `gatsby-plugin-antd`,
    ]
  }