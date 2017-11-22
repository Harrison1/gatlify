import React, { Component } from "react"
import Link from "gatsby-link"
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import IronImage from '../components/IronImage'
 
const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};
 
const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last } = pathContext
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  const { edges: nodes } = data.allMarkdownRemark
  const total = data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.templateKey === 'blog-post').length

  return (

      <div className="home-template">

        <Helmet>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>

      <Header image='https://casper.ghost.org/v1.0.0/images/blog-cover.jpg' title="Gatlify Blog" tagline="My Super Cool Tagline" />
      
        <main id="site-main" className="site-main outer" role="main">

            <div className="inner">

                <div className="post-feed">

                    {group.map(({ node }) => (

                        <article className="post-card post" key={node.id}>
                            <Link className="post-card-image-link" to={node.frontmatter.path}>
                                <IronImage srcLoaded={node.frontmatter.featuredImage} />
                            </Link>
                            <div className="post-card-content">
                                <Link className="post-card-content-link" to={node.frontmatter.path}> 
                                    <header className="post-card-header">
                                        <span className="post-card-tags">{node.frontmatter.tags[0]}</span>
                                        <h2 className="post-card-title">{node.frontmatter.title}</h2>
                                        <p className="post-card-author">{ node.frontmatter.date }</p>
                                    </header>
                                    <section className="post-card-excerpt">
                                        <p>{node.frontmatter.description}</p>
                                    </section>
                                </Link>
                                <footer className="post-card-meta">
                                    <img className="author-profile-image" src={ node.frontmatter.authorImage } alt="my name" />
                                    <span className="post-card-author">{ node.frontmatter.author }</span>
                                </footer>
                            </div>
                        </article>

                    ))}

                </div>

                <div className="paginatation">
                    <div className="previousLink">
                        <NavLink test={first} url={previousUrl} text="Prev" />
                    </div>
                    <p>{index} of { Math.ceil(total/12)}</p>
                    <div className="nextLink">
                        <NavLink test={last} url={nextUrl} text="Next" />
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
    
  );
}

export default IndexPage;
 
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 40)
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
