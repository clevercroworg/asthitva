import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingChat from '../../components/FloatingChat';
import { blogConfigs } from './blogConfigs';
import './Blog.css';

const BlogList = () => {
  useEffect(() => {
    // 1. Update Title
    document.title = "Asthitva Blog | Event Venues & Planning Guides Bangalore";

    // 2. Update Meta Description
    let metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta');
      metaDescriptionEl.name = 'description';
      document.head.appendChild(metaDescriptionEl);
    }
    metaDescriptionEl.content = "Find planning tips, venue comparison guides, checklists and stories from Asthitva, your premier partner for celebrations and corporate events in Bangalore.";

    // 3. Update Canonical Link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.rel = 'canonical';
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = "https://asthitva.com/blog/";

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const blogsArray = Object.values(blogConfigs);

  return (
    <div className="blog-list-page">
      {/* Dynamic Navbar */}
      <Navbar logoText="Blog Guides" topBarText="Event planning and venue booking tips" />

      {/* Hero Section */}
      <header className="blog-list-hero">
        <span className="overline">Expert Advice</span>
        <h1>Asthitva Blog</h1>
        <p>Planning an event in Bangalore? Explore our expert guides, checklists, and venue stories to make your celebration seamless.</p>
      </header>

      {/* Grid Section */}
      <section className="blog-grid-section">
        <div className="blog-grid">
          {blogsArray.map((blog) => (
            <article key={blog.slug} className="blog-card">
              <div className="blog-card-image-wrapper">
                <img src={blog.image} alt={blog.h1} className="blog-card-image" />
                <span className="blog-card-category">{blog.category}</span>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span>📅 {blog.date}</span>
                  <span>⏱️ {blog.readTime}</span>
                </div>
                <h2 className="blog-card-title">{blog.h1}</h2>
                <p className="blog-card-excerpt">
                  {blog.intro[0]}
                </p>
                <div className="blog-card-footer">
                  <Link to={`/blog/${blog.slug}`} className="read-more-link">
                    Read Article <span>➔</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer & Chat */}
      <Footer page="home" />
      <FloatingChat />
    </div>
  );
};

export default BlogList;
