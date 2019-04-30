import { useStaticQuery, graphql } from 'gatsby';

const usePosts = () => {
    // use GraphQL query for blog post data

    const data = useStaticQuery(graphql`
        query {
            allMdx {
                nodes {
                frontmatter {
                title
                author
                slug
                }
                excerpt
            }
            }
        }
    `)

    return data.allMdx.nodes.map(post => ({
        title: post.frontmatter.title,
        author: post.frontmatter.author,
        slug: post.frontmatter.slug,
        excerpt: post.excerpt
    })) 
}

export default usePosts;