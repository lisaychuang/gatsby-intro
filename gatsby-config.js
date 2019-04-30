// customize gatsby config

module.exports = {
  siteMetadata: {
    title: 'Frontend Masters Gatsby workshop',
    description: "A site built at FEM Gatsby workshop"

  },

    plugins: [
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-mdx',
        options: {
          defaultLayouts: {
            default: require.resolve('./src/components/layout.js'),
          }
        }
      },

    ],
  }