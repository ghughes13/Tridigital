module.exports = {
  siteMetadata: {
    siteUrl: `https://www.tridigitalmarketing.com`,
    title: `We Are Your IT Marketing Department`,
    description: `Your IT Marketing professionals are serious about their focus on YOU. We create 100% custom strategies, websites, content, videos and designs, all with one goal—to tell YOUR STORY.`,
    author: `@ghughes139`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-48748407-9",
        head: true,
        anonymize: true,
        respectDNT: true,
        defer: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.tridigitalmarketing.com",
        sitemap: "https://www.tridigitalmarketing.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
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
        verboseOutput: false,
      },
    },
    // `gatsby-plugin-offline`, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-sass`,
  ],
};
