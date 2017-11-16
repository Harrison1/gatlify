import React, { Component } from "react";
import Link from "gatsby-link";
import Helmet from 'react-helmet';

 
const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};
 
const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  // const { data } = this.props;
  const { edges: nodes } = data.allMarkdownRemark;

  console.log(data);
 
  return (

    <section className="section">
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Helmet>
      <div className="container">
      <h4>{data.allMarkdownRemark.totalCount} nodes</h4>

      {group.map(({ node }) => (
              <div className="content" style={{ border: '1px solid #eaecee', padding: '2em 4em' }} key={node.id}>
                <p>
                  <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
                  <span> &bull; </span>
                  <small>{node.frontmatter.date}</small>
                </p>
                <p>
                  {node.excerpt}
                  <br />
                  <br />
                  <Link className="button is-info is-small" to={node.frontmatter.path}>
                    Keep Reading
                  </Link>
                </p>
              </div>

          ))}

        <div className="previousLink">
          <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
        </div>
        <div className="nextLink">
          <NavLink test={last} url={nextUrl} text="Go to Next Page" />
        </div>
      </div>
    </section>
    
  );
}

export default IndexPage;
 
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
