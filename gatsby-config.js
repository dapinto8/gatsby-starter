const env = process.env.NODE_ENV;

require('dotenv').config({
  path: `.env.${env}`
})

const isProduction = env === 'production';

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.example.com',
    title: 'gatsby-starter',
    description: 'Gatsby starter project',
    author: '@dapinto8',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
          sourceMap: !isProduction,
          localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    /*{
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID || null,
        head: true
      }
    },*/
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 100
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: 'https://www.example.com'
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#eC7f00',
        theme_color: '#eC7f00',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
  ],
};
