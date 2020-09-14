const dotenv = require('dotenv')

if(process.env.NODE_ENV !== 'production'){
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `True Heart Unlimited`,
    description: `An Australian made, Brisbane based company specialising in unique kangaroo leather goods. `,
    author: `JJAM Designs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo.JPG`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options:{
        spaceId:`uwyhswazjqkn`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
