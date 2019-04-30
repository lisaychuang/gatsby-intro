// customize gatsby config

module.exports = {
  siteMetadata: {
    title: 'Frontend Masters Gatsby workshop',
    description: "A site built at FEM Gatsby workshop"

  },

    plugins: [
      {
        resolve: `gatsby-plugin-emotion`,
        options: {
          // Accepts all options defined by `babel-plugin-emotion` plugin.
        },
      },
      'gatsby-plugin-react-helmet'
    ],
  }