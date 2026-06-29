import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingChat from '../../components/FloatingChat';
import { blogConfigs } from './blogConfigs';
import './Blog.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogConfigs[slug];

  useEffect(() => {
    if (!blog) return;

    // 1. Update Title
    document.title = blog.seoTitle;

    // 2. Update Meta Description
    let metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta');
      metaDescriptionEl.name = 'description';
      document.head.appendChild(metaDescriptionEl);
    }
    metaDescriptionEl.content = blog.metaDesc;

    // 3. Update Canonical Link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.rel = 'canonical';
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = `https://asthitva.com/blog/${slug}/`;

    // 4. Inject Breadcrumb Schema
    const breadcrumbId = `blog-breadcrumb-schema-${slug}`;
    let breadcrumbScript = document.getElementById(breadcrumbId);
    if (breadcrumbScript) breadcrumbScript.remove();

    breadcrumbScript = document.createElement('script');
    breadcrumbScript.id = breadcrumbId;
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://asthitva.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://asthitva.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": blog.h1,
          "item": `https://asthitva.com/blog/${slug}/`
        }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    // 5. Inject BlogPosting Schema
    const postingId = `blog-posting-schema-${slug}`;
    let postingScript = document.getElementById(postingId);
    if (postingScript) postingScript.remove();

    postingScript = document.createElement('script');
    postingScript.id = postingId;
    postingScript.type = 'application/ld+json';
    postingScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blog.h1,
      "image": `https://asthitva.com${blog.image}`,
      "datePublished": "2026-06-29",
      "author": {
        "@type": "Organization",
        "name": "Asthitva"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Asthitva",
        "logo": {
          "@type": "ImageObject",
          "url": "https://asthitva.com/favicon.png"
        }
      },
      "description": blog.metaDesc,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://asthitva.com/blog/${slug}/`
      }
    });
    document.head.appendChild(postingScript);

    // Scroll to top
    window.scrollTo(0, 0);

    // Clean up schemas
    return () => {
      const bScript = document.getElementById(breadcrumbId);
      if (bScript) bScript.remove();

      const pScript = document.getElementById(postingId);
      if (pScript) pScript.remove();
    };
  }, [slug, blog]);

  if (!blog) {
    return (
      <div className="blog-list-page" style={{ padding: '8rem 2rem', textAlignment: 'center' }}>
        <Navbar logoText="Blog" />
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Article Not Found</h1>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Sorry, the blog article you are looking for does not exist or has been moved.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog Directory</Link>
        </div>
        <Footer page="home" />
      </div>
    );
  }

  // Get related blogs (excluding current)
  const relatedBlogs = Object.values(blogConfigs)
    .filter((b) => b.slug !== slug)
    .slice(0, 3);

  return (
    <div className="blog-detail-page">
      {/* Dynamic Navbar */}
      <Navbar logoText="Blog Guides" topBarText="Expert event venue guides and tips" />

      {/* Hero Header */}
      <header className="blog-detail-hero">
        <Link to="/blog" className="blog-detail-back">
          <span>←</span> Back to all articles
        </Link>
        <div className="blog-detail-meta">
          <span className="blog-detail-category">{blog.category}</span>
          <span>•</span>
          <span>{blog.date}</span>
          <span>•</span>
          <span>⏱️ {blog.readTime}</span>
        </div>
        <h1>{blog.h1}</h1>
      </header>

      {/* Featured Image */}
      <div className="blog-detail-featured-image">
        <img src={blog.image} alt={blog.h1} />
      </div>

      {/* Grid Layout: Article Content + Sidebar */}
      <div className="blog-detail-container">
        <main className="blog-detail-body">
          {/* Intro Text */}
          <div className="blog-detail-intro">
            {blog.intro.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>

          {/* Body Sections */}
          {blog.sections.map((section, index) => (
            <section key={index} className="blog-detail-section">
              <h2>{section.title}</h2>
              {section.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </section>
          ))}

          {/* Conclusion */}
          <div className="blog-detail-conclusion">
            <h3>Conclusion</h3>
            {blog.conclusion.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>

          {/* CTA Box at Bottom of Article */}
          <div className="blog-sidebar-widget cta-widget" style={{ marginTop: '3.5rem', textAlign: 'left', padding: '2.5rem' }}>
            <h3>Need Help Finding the Right Venue?</h3>
            <p>{blog.cta}</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+918904768299" className="cta-widget-btn">📞 Call Us Now</a>
              <a href="https://wa.me/918904768299" target="_blank" rel="noopener noreferrer" className="cta-widget-btn" style={{ background: '#25D366', color: 'white' }}>💬 WhatsApp</a>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          {/* Sticky CTA Widget */}
          <div className="blog-sidebar-widget cta-widget">
            <h3>Plan Your Event</h3>
            <p>Asthitva offers premier outdoor and indoor venue spaces across Bangalore. Get a customized quote today!</p>
            <a href="https://wa.me/918904768299" target="_blank" rel="noopener noreferrer" className="cta-widget-btn">Get Free Quote</a>
          </div>

          {/* Related Articles */}
          <div className="blog-sidebar-widget">
            <h3 className="widget-title">Related Articles</h3>
            <div className="related-blogs-list">
              {relatedBlogs.map((rBlog) => (
                <Link to={`/blog/${rBlog.slug}`} key={rBlog.slug} className="related-blog-item">
                  <div className="related-blog-img">
                    <img src={rBlog.image} alt={rBlog.h1} />
                  </div>
                  <div className="related-blog-info">
                    <h4>{rBlog.h1}</h4>
                    <span className="related-blog-date">{rBlog.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Footer & Chat */}
      <Footer page="home" />
      <FloatingChat />
    </div>
  );
};

export default BlogDetail;
