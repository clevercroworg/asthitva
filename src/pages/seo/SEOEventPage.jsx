import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import FloatingChat from '../../components/FloatingChat';
import './SEOEventPage.css';

const venueInfo = {
  teakmeadows: {
    name: 'Asthitva Teak Meadows',
    location: 'Magadi Road, Bengaluru',
    capacity: 'Up to 800 Guests',
    image: '/images/teak-meadows/IMG20251212184424.jpg',
    path: '/magadi-road'
  },
  muddainapalya: {
    name: 'Asthitva The Venue',
    location: 'Muddainapalya, Bengaluru',
    capacity: 'Up to 600 Guests',
    image: '/images/muddainapalya/venue-1/1.jpg',
    path: '/muddainapalya'
  },
  ullal: {
    name: 'Asthitva Terrace Garden',
    location: 'Ullal, Bengaluru',
    capacity: 'Up to 250 Guests',
    image: '/images/ullal/rooftop_0.jpg',
    path: '/ullal'
  },
  rrnagar: {
    name: 'Asthitva RR Nagar',
    location: 'RR Nagar, Bengaluru',
    capacity: 'Up to 700 Guests',
    image: '/images/rr-nagar/venue-1/video-thumbnail.webp',
    path: '/rrnagar'
  }
};

const SEOEventPage = ({ config }) => {
  const { slug, seoTitle, metaDesc, h1, hero, content, venues } = config;

  useEffect(() => {
    // 1. Update document title
    document.title = seoTitle;

    // 2. Update meta description
    let metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta');
      metaDescriptionEl.name = 'description';
      document.head.appendChild(metaDescriptionEl);
    }
    metaDescriptionEl.content = metaDesc;

    // 3. Update canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.rel = 'canonical';
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = `https://asthitva.com/${slug}/`;

    // 4. Inject Breadcrumb Schema
    const breadcrumbSchemaId = `breadcrumb-schema-${slug}`;
    let breadcrumbScript = document.getElementById(breadcrumbSchemaId);
    if (breadcrumbScript) {
      breadcrumbScript.remove();
    }
    breadcrumbScript = document.createElement('script');
    breadcrumbScript.id = breadcrumbSchemaId;
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
          "name": h1,
          "item": `https://asthitva.com/${slug}/`
        }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    // Clean up
    return () => {
      const bScript = document.getElementById(breadcrumbSchemaId);
      if (bScript) bScript.remove();
    };
  }, [slug, seoTitle, metaDesc, h1]);

  return (
    <div className="app seo-event-page">
      <Navbar logoText="Asthitva" topBarText={`Premium ${h1.split(' in ')[0]} Venue Options`} />
      
      {/* Premium Hero Section */}
      <Header title={hero.heading} bgImage={hero.bgImage} />
      
      <main className="seo-main-content">
        {/* Intro Section */}
        <section className="section seo-intro-section">
          <div className="seo-section-grid">
            <div className="seo-text-block">
              <span className="overline">Event Spaces</span>
              <h2 className="seo-section-title-left">{content.introTitle}</h2>
              <p className="seo-paragraph">{content.introText}</p>
            </div>
            <div className="seo-decoration-block">
              <div className="decoration-card">
                <h3>✦ Elegant Spaces</h3>
                <p>Designed for premium guest experiences, premium styling, and flawless event execution.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Suitability & Ideal For Section */}
        <section className="section seo-details-section">
          <div className="seo-details-grid">
            <div className="seo-suitability-block">
              <h2 className="seo-block-title">{content.suitabilityTitle}</h2>
              <p className="seo-paragraph">{content.suitabilityText}</p>
              
              {content.whyChooseTitle && (
                <div className="seo-why-choose">
                  <h3 className="seo-sub-title">{content.whyChooseTitle}</h3>
                  <ul className="seo-bullets-list">
                    {content.whyChooseBullets.map((bullet, idx) => (
                      <li key={idx}>
                        <span className="checkmark">✔</span> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="seo-ideal-block">
              <div className="seo-sticky-card">
                <h3 className="seo-block-title-small">{content.idealForTitle}</h3>
                <ul className="seo-ideal-list">
                  {content.idealForItems.map((item, idx) => (
                    <li key={idx} className="seo-ideal-item">
                      <span className="star-icon">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Location Advantage Section */}
        <section className="section seo-location-section">
          <div className="seo-location-container">
            <h2 className="seo-block-title" style={{ textAlign: 'center' }}>{content.locationTitle}</h2>
            <p className="seo-paragraph" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
              {content.locationText}
            </p>
          </div>
        </section>

        {/* Curated Venues Showcase Section */}
        <section className="section seo-venues-section">
          <div className="venues-showcase-header">
            <span className="overline" style={{ display: 'block', textAlign: 'center' }}>Our Venues</span>
            <h2 className="section-title">Explore Suitable Venues</h2>
            <p className="showcase-desc">Explore our premium venues across Bengaluru selected for your event needs.</p>
          </div>

          <div className="seo-venues-grid">
            {venues.map((venueKey) => {
              const info = venueInfo[venueKey];
              if (!info) return null;
              return (
                <div key={venueKey} className="seo-venue-showcase-card">
                  <div className="venue-img-wrapper">
                    <img src={info.image} alt={info.name} />
                  </div>
                  <div className="venue-card-details">
                    <h3>{info.name}</h3>
                    <p className="venue-loc">📍 {info.location}</p>
                    <p className="venue-cap">👥 Capacity: {info.capacity}</p>
                    <Link to={info.path} className="btn btn-primary btn-explore">
                      View Details & Gallery →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Conversion Focused Call To Action banner */}
        <section className="section seo-inline-cta">
          <div className="seo-cta-banner">
            <h2>{content.ctaSectionTitle}</h2>
            <p>{content.ctaSectionText}</p>
            <div className="seo-cta-buttons">
              <a href="tel:+918904768299" className="btn btn-primary cta-btn">
                📞 Call +91 89047 68299
              </a>
              <a href="https://wa.me/918904768299" target="_blank" rel="noopener noreferrer" className="btn cta-btn-wa">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Dynamic FAQ List Section with Schema */}
        <FAQ page={slug} />

        {/* Global Conversion CTA banner */}
        <CTA page="home" />
      </main>

      <Footer page="home" />
      <FloatingChat />
    </div>
  );
};

export default SEOEventPage;
