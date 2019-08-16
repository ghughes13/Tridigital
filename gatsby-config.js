module.exports = {
  siteMetadata: {
    title: `GB Tech`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
          baseUrl: "tdgatsbytest.wpengine.com",
          protocol: "https", 
          hostingWPCOM: false,
          useACF: true,
          verboseOutput: true
      }
    },
    {
      resolve: 'gatsby-source-gravityforms',
      options: {
          // Base URL needs to include protocol (http/https)
          baseUrl: 'https://www.gbtech.net',
          // Gravity Forms API
          api: {
              key: 'ck_64ea0717931cb6fbaf7310b9ba1d6e7817d41f79',
              secret: 'cs_99c7ef44709b98f7de31db9844e85c6b089b72fe',
          },
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
