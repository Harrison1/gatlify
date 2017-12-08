import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Navbar from '../components/Navbar'
import Tag from '../components/Tag'
import AuthorCard from '../components/AuthorCard'
import Footer from '../components/Footer'

const Template = ({ data }) => {

  const { markdownRemark: post } = data;

  return (
    <div>

      <Navbar />

      <Helmet title={`Blog | ${post.frontmatter.title}`} />

      <div className="blog-post-header" style={{ backgroundImage: `url(${ post.frontmatter.image })` }}>

        { post.frontmatter.tags.map((n, i) => {
              return <Tag key={ i } tag= { n } />
          })
        }

      </div>
      
      <main id="site-main" className="site-main outer bg-white" role="main">

          <div className="inner">

              <article className="post-full">

                  <div className="blog-content">

                      <h1 className="post-full-title">{ post.frontmatter.title }</h1>

                      <div className="date-meta">

                        <p>{ post.frontmatter.date }</p>

                      </div>

                      <div dangerouslySetInnerHTML={{ __html: post.html }} />

                      <hr />

                      <AuthorCard image={ post.frontmatter.authorImage } name={ post.frontmatter.author } twitter={ post.frontmatter.authorTwitter } />

                  </div>

              </article>

          </div>

      </main>

      <Footer />

    </div>
  );
}

export default Template

export const blogPageQuery = graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      author
      authorImage
      authorTwitter
      date(formatString: "MMMM DD, YYYY")
      image
      path
      tags
      title
    }
  }
}
`;