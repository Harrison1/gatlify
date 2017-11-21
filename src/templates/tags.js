import React from "react"
import Link from "gatsby-link"
import Header from '../components/Header'
import HomeNav from '../components/HomeNav'
import Footer from '../components/Footer'

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext
  const sortedTags = Object.keys(posts).sort();

    if (tag) {
        return (
            <div className="home-template">

                <header className="site-header outer" style={{backgroundImage: 'url(https://casper.ghost.org/v1.0.0/images/blog-cover.jpg)' }}>
                    <div className="inner">
                        <div className="site-header-content">
                            <h1 className="site-title">
                                {post.length} post{post.length === 1 ? "" : "s"} tagged with{" "}
                                <span style={{fontStyle: 'italic'}}>{tag}</span>
                            </h1>
                        </div>
                        <HomeNav />
                    </div>
                </header>
            
                <main id="site-main" className="site-main outer" role="main">
            
                    <div className="inner">
            
                        <div className="post-feed">
                                
                        {post.map(post => {
                            return (
                                <article className="post-card post" key={post.id}>
                                    <Link className="post-card-image-link" to={post.frontmatter.path}>
                                        <div className="post-card-image" style={{backgroundImage: 'url(' + post.frontmatter.featuredImage + ')'}}></div>
                                    </Link>
                                    <div className="post-card-content">
                                        <Link className="post-card-content-link" to={post.frontmatter.path}> 
                                            <header className="post-card-header">
                                                <span className="post-card-tags">{post.frontmatter.tags[0]}</span>
                                                <h2 className="post-card-title">{post.frontmatter.title}</h2>
                                            </header>
                                            <section className="post-card-excerpt">
                                                <p>{post.frontmatter.description}</p>
                                            </section>
                                        </Link>
                                        <footer className="post-card-meta">
                                            <img className="author-profile-image" src={ post.frontmatter.featuredImage } alt="my name" />
                                            <span className="post-card-author">Author Name</span>
                                        </footer>
                                    </div>
                                </article>
                            )})}

                        </div>

                    </div>
                </main>

                <Footer />

            </div>
        )
    }
  return (

    <div>

        <div className="home-template">

            <Header image='https://casper.ghost.org/v1.0.0/images/blog-cover.jpg' title="Tags" />
        
                <main id="site-main" className="site-main outer" role="main">
                
                    <div className="inner">

                        <div className="post-feed">

                            <div className="tag-container">
                                                    
                                { sortedTags.map((n, i) => (

                                    <Link to={ `tags/${ n }` } key={i}>

                                        <div className="post-card post">
                                            <div className="post-card-content">
                                                <h2 className="post-card-title">
                                                    { n }
                                                </h2>
                                            </div>
                                        </div>
                                    
                                    </Link>

                                ))}

                            </div>

                        </div>

                    </div>
                </main>

            <Footer />

        </div>

    </div>
  );
}