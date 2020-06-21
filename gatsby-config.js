module.exports = {
  siteMetadata: {
    title: 'Gres2Air',
    description: 'Google Results to Airtable',
    author: '@julee',
    siteUrl: 'https://google.com',
    image: 'https://source.unsplash.com/random/400x200',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Example',
        short_name: 'example',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['./src/styles/'],
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-typescript',
  ],
};
