const path = require('path');
const pagination = require('gatsby-paginate');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 200)
            html
            id
            frontmatter {
              templateKey
              path
              date(formatString: "MMMM DD, YYYY")
              title
              featuredImage
              description
            }
          }
        }
      }
    }
  `).then(result => {

    const posts = result.data.allMarkdownRemark.edges;
    const blogposts = posts.filter(post => post.node.frontmatter.templateKey === 'blog-post');
    
    console.log(posts.frontmatter);

    pagination({
      edges: blogposts,
      createPage: createPage,
      pageTemplate: "src/templates/index.js",
      pageLength: 12
    });
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
        context: {}
      });
    });
  });
};
