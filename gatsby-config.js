module.exports = {
  siteMetadata: {
    title: `We Are Your IT Marketing Department`,
    description: `Your IT Marketing professionals are serious about their focus on YOU. We create 100% custom strategies, websites, content, videos and designs, all with one goal—to tell YOUR STORY.`,
    author: `@ghughes139`,
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
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
};
