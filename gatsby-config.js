
const path = require('path')

module.exports = {
  siteMetadata: {
    title: `CHU CANCER`,
    description: `Centre Mohammed VI Pour le traitement des cancers`,
    keywords: 'traitement du cancer casablanca, CHU Ibn Rochd',
    author: `@aymanelassfar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `chu-cancer`,
        short_name: `chu`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // gatsby sass
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
        // Override the file regex for Sass
        sassRuleTest: /\.global\.s(a|c)ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
      },
    },
    // absolute imports
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/images'),
        scss: path.join(__dirname, 'src/scss'),
      }
    },
    // {
    //   resolve: `@ccalamos/gatsby-source-googlemaps-static`,
    //   options: {
    //     key: process.env.GOOGLE_MAPS_STATIC_API_KEY,
    //     center: `33.5529929,7.640008099999999`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
