import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { pageQuery } from './index';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Navbar />
      <Helmet title={`Blog | ${post.frontmatter.title}`} />

      <div className="blog-post-header" style={{ backgroundImage: `url(${ post.frontmatter.featuredImage })` }}>
        { post.frontmatter.tags.map((n, i) => {
            return ( <p key={ i }><Link className="tag-link" to={ `tags/${ n }` }>
              { n }
            </Link></p> )
        })}
      </div>
      <main id="site-main" className="site-main outer bg-white" role="main">
          <div className="inner">
              <article className="post-full">
                  <div className="blog-content">
                      <h1 className="post-full-title">{ post.frontmatter.title }</h1>
                      <div className="date-meta">
                        <p>{ post.frontmatter.date }</p>
                        <p>UE4 Version: <span className="uev">{ post.frontmatter.uev }</span></p>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: post.html }} />
                      <a className="youtube-link" href={ post.frontmatter.featuredVideo }>Please leave any comments on the YouTube Page</a>
                      <hr />
                      <section className="author-card">
                          <img className="author-profile-image" src={ post.frontmatter.featuredImage } alt="author image" />
                          <section className="author-card-content">
                              <h4 className="author-card-name">{ post.frontmatter.author }</h4>
                              <p className="twitter-handle"><a href={ `https://twitter.com/${post.frontmatter.authorTwitter}`}>@{ post.frontmatter.authorTwitter }</a></p> 
                          </section>
                      </section>
                  </div>
              </article>
          </div>
      </main>

      <Footer />
    </div>
  );
}

export const blogPageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        author
        authorImage
        authorTwitter
        date(formatString: "MMMM DD, YYYY")
        featuredImage
        featuredVideo
        githubLink
        path
        tags
        title
        uev
      }
    }
  }
`;

