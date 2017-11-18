import React from "react";
import Link from "gatsby-link";

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext;

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
                </div>
        )}
        <Link to="/tags">All tags</Link>
  return (
    <div>
      <h1>Tags</h1>

      <Link to="/">All posts</Link>
    </div>
  );
}