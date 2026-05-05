import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Beautiful venue with great ambience.",
      author: "Happy Client",
      event: "Wedding",
    },
    {
      id: 2,
      text: "Perfect for family events and celebrations.",
      author: "Satisfied Customer",
      event: "Family Event",
    },
    {
      id: 3,
      text: "Well-maintained space with greenery and good facilities.",
      author: "Delighted Guest",
      event: "Celebration",
    },
  ];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="testimonials-container">
        <span className="overline" style={{ display: 'block', textAlign: 'center' }}>What Our Guests Say</span>
        <h2 className="section-title">Testimonials</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-quote-mark">"</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="testimonial-author">{t.author}</p>
                  <p className="testimonial-event">{t.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
