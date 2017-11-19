import React from 'react'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Navbar />
      <Helmet title={`Blog | ${post.frontmatter.title}`} />

      <div style={{textAlign: 'center', backgroundImage: 'url(https://res.cloudinary.com/several-levels/image/upload/v1510349575/divinity-original-sin_xaih06.jpg)', width: '100%', height: '30vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}}>
      </div>
      <main id="site-main" className="site-main outer bg-white" role="main">
          <div className="inner">
              <article className="post-full">
                  <div className="blog-content">
                      <h1 className="post-full-title">{post.frontmatter.title}</h1>
                      <div dangerouslySetInnerHTML={{ __html: post.html }} />
                  </div>
              </article>
          </div>
      </main>

      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImage
      }
    }
  }
`;

