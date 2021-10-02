require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Pv Duc 's resume`,
    description: `Hello, i 'm Pv Duc. High level experience in web design and development knowledge, producing quality work.`,
    author: `pvduc`,
    siteUrl: process.env.GATSBY_SITE_URL,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Epilogue',
              variants: ['300', '400', '500', '600', '700', '900'],
            },
          ],
        },
      },
    },
    'gatsby-plugin-preload-fonts',
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-offline`
  ],
};
