// bundle of actions & graphQL helper
// report is Gatsby's built-in console log


exports.createPages = async ({ actions, graphql, reporter }) => {
    // Gatbsy node: graphQL becomes a function call (i.s.o template literal in React interface)
    const result = await graphql(`
      query {
        allMdx {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `);

    // report.panic prints out an error & stops Gatsby
    if (result.errors) {
      reporter.panic('failed to create posts', result.errors);
    }
  
    const posts = result.data.allMdx.nodes;
  
    // Auto-generate a page for each post
    posts.forEach(post => {
      console.log(post.frontmatter.slug)
      actions.createPage({
        path: post.frontmatter.slug,
        component: require.resolve('./src/templates/post.js'),
        context: {
          slug: post.frontmatter.slug,
        },
      });
    });
};