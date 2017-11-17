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
 
  return (

    <section className="section">
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Helmet>
      <div className="container">
      <h4>{data.allMarkdownRemark.totalCount} nodes</h4>

      {group.map(({ node }) => (

            <article className="post-card">
                <Link className="post-card-image-link" to={node.frontmatter.path}>
                    <div className="post-card-image" style={{backgroundImage: 'url(' + node.frontmatter.featuredImage + ')'}}></div>
                </Link>
                <div className="post-card-content">
                    <Link className="post-card-content-link" to={node.frontmatter.path}> 
                        <header className="post-card-header">
                            <h2 className="post-card-title">{node.frontmatter.title}</h2>
                        </header>
                        <section className="post-card-excerpt">
                            <p>{node.excerpt}</p>
                        </section>
                    </Link>
                </div>
            </article>

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
