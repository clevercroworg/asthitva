import React, { useState, useEffect } from 'react';
import './FAQ.css';

const faqData = {
  home: [
    {
      q: "What type of events can be hosted at Asthitva?",
      a: "Asthitva venues are suitable for weddings, receptions, engagements, birthday parties, baby showers, naming ceremonies, corporate events, family functions, cultural events and private celebrations."
    },
    {
      q: "Where are Asthitva venues located?",
      a: "Asthitva has event venue options across key Bengaluru locations, including areas such as Magadi Road, RR Nagar, Muddainapalya, Ullal, Banashankari and other nearby locations."
    },
    {
      q: "Is Asthitva suitable for weddings and receptions?",
      a: "Yes. Asthitva venues are designed for weddings, receptions and family celebrations, with spacious event areas, dining arrangements, guest facilities and elegant surroundings."
    },
    {
      q: "Does Asthitva offer outdoor event venues in Bangalore?",
      a: "Yes. Asthitva offers outdoor and semi-open venue options suitable for weddings, receptions, parties and family events in Bengaluru."
    },
    {
      q: "What is the guest capacity of Asthitva venues?",
      a: "The guest capacity depends on the selected Asthitva venue and event layout. Some venues are suitable for intimate gatherings, while others can host larger celebrations with several hundred guests."
    },
    {
      q: "Can we visit the venue before booking?",
      a: "Yes. Guests can schedule a venue visit to check the space, facilities, access, dining area and availability before confirming the booking."
    },
    {
      q: "How can I check availability for an event date?",
      a: "You can contact Asthitva by phone or WhatsApp to check date availability, venue options, pricing and visit slots."
    },
    {
      q: "Does Asthitva provide parking and guest facilities?",
      a: "Facilities may vary by venue, but selected Asthitva locations offer parking, dining space, rooms, power backup and other event-ready amenities."
    }
  ],
  teakmeadows: [
    {
      q: "Is Asthitva Teak Meadows suitable for weddings on Magadi Road?",
      a: "Yes. Asthitva Teak Meadows is suitable for weddings, receptions, engagements and family celebrations near Magadi Road, Bengaluru."
    },
    {
      q: "What events can be hosted at Asthitva Teak Meadows?",
      a: "The venue can be used for weddings, receptions, birthday parties, corporate events, family gatherings, cultural functions and private celebrations."
    },
    {
      q: "Is Asthitva Teak Meadows an outdoor venue?",
      a: "Asthitva Teak Meadows offers a spacious and elegant setting that works well for outdoor and semi-open event experiences, depending on the chosen layout and event requirement."
    },
    {
      q: "What is the capacity of Asthitva Teak Meadows?",
      a: "The capacity depends on the event type, seating plan, dining setup and decor layout. Guests can contact Asthitva for exact capacity details based on the event date and requirement."
    },
    {
      q: "Is the venue suitable for reception events?",
      a: "Yes. Asthitva Teak Meadows is suitable for wedding receptions, family gatherings and dining-based celebrations."
    },
    {
      q: "Are dining arrangements available at the venue?",
      a: "Dining setup options are available based on the event plan and selected venue arrangement. Details can be confirmed during the venue visit or enquiry call."
    },
    {
      q: "Is parking available at Asthitva Teak Meadows?",
      a: "Parking availability can be confirmed with the Asthitva team based on the event size and selected date."
    },
    {
      q: "How do I book Asthitva Teak Meadows?",
      a: "You can call or WhatsApp Asthitva to check date availability, pricing, venue visit slots and booking details."
    }
  ],
  rrnagar: [
    {
      q: "Is Asthitva RR Nagar suitable for weddings?",
      a: "Yes. Asthitva RR Nagar is suitable for weddings, receptions, engagements and other family celebrations in and around Rajarajeshwari Nagar, Bengaluru."
    },
    {
      q: "What type of events can be hosted at Asthitva RR Nagar?",
      a: "Asthitva RR Nagar can host weddings, receptions, birthday parties, baby showers, naming ceremonies, corporate events, private parties and family functions."
    },
    {
      q: "Is Asthitva RR Nagar suitable for large gatherings?",
      a: "Yes. Depending on the selected venue layout, Asthitva RR Nagar can accommodate medium to large gatherings. Exact capacity should be confirmed with the venue team."
    },
    {
      q: "Does Asthitva RR Nagar have dining space?",
      a: "Yes. Dining arrangements can be planned based on the event layout and guest count. The venue team can share details during enquiry."
    },
    {
      q: "Is there a lawn or outdoor space at Asthitva RR Nagar?",
      a: "Yes. Depending on the specific venue configuration, outdoor or open-air settings may be available."
    },
    {
      q: "Can we visit Asthitva RR Nagar before booking?",
      a: "Yes. Guests can schedule a visit to inspect the facilities, layout, dining area and accessibility."
    },
    {
      q: "Is parking available at Asthitva RR Nagar?",
      a: "Parking details can be confirmed with the venue team based on the event size and date."
    },
    {
      q: "How can I check the price for Asthitva RR Nagar?",
      a: "You can contact Asthitva directly to check pricing, inclusions, date availability and venue visit options."
    }
  ],
  muddainapalya: [
    {
      q: "Is Asthitva Muddainapalya a good venue for family events?",
      a: "Yes. Asthitva Muddainapalya is suitable for family functions, birthday parties, engagements, receptions and private celebrations."
    },
    {
      q: "Can weddings be hosted at Asthitva Muddainapalya?",
      a: "Yes. Depending on the event size and layout, Asthitva Muddainapalya can be considered for weddings, receptions and related ceremonies."
    },
    {
      q: "What events are best suited for this venue?",
      a: "The venue is suitable for weddings, receptions, engagements, birthday parties, baby showers, naming ceremonies, cultural events and corporate gatherings."
    },
    {
      q: "Which nearby areas can easily access Asthitva Muddainapalya?",
      a: "The venue is convenient for guests from Muddainapalya, Nagarbhavi, Vishweshwarayya Layout, Ullal, Kengeri and nearby Bengaluru locations."
    },
    {
      q: "Does the venue have space for dining arrangements?",
      a: "Dining arrangements can be planned based on the selected event layout and guest count. The venue team can share exact details during enquiry."
    },
    {
      q: "Can we visit Asthitva Muddainapalya before booking?",
      a: "Yes. A venue visit can be scheduled to understand the space, facilities, location and event suitability."
    },
    {
      q: "Is the venue suitable for birthday parties?",
      a: "Yes. Asthitva Muddainapalya is suitable for birthday parties, family gatherings and small to medium private events."
    },
    {
      q: "How do I check availability for Asthitva Muddainapalya?",
      a: "You can call or WhatsApp Asthitva to check availability, pricing, inclusions and visit timings."
    }
  ],
  ullal: [
    {
      q: "Is Asthitva Ullal suitable for weddings?",
      a: "Yes. Asthitva Ullal is suitable for weddings, receptions, engagements and family events depending on the selected layout and guest count."
    },
    {
      q: "What type of events can be hosted at Asthitva Ullal?",
      a: "Asthitva Ullal can host birthday parties, family functions, weddings, receptions, baby showers, naming ceremonies, private parties and corporate events."
    },
    {
      q: "Which nearby areas does Asthitva Ullal serve?",
      a: "Asthitva Ullal is convenient for guests from Ullal, Nagarbhavi, Muddainapalya, Kengeri, Vishweshwarayya Layout and nearby West Bengaluru areas."
    },
    {
      q: "Is Asthitva Ullal suitable for birthday parties?",
      a: "Yes. The venue can be used for birthday parties, milestone celebrations and family gatherings."
    },
    {
      q: "Does the venue have dining space?",
      a: "Dining arrangements can be planned based on the event layout and number of guests. Exact details can be confirmed during enquiry."
    },
    {
      q: "Can I schedule a venue visit before booking?",
      a: "Yes. Guests can schedule a visit to see the venue, check facilities and understand whether the space suits their event."
    },
    {
      q: "Are event timings flexible?",
      a: "Event timings depend on venue availability, booking policy and local guidelines. Guests can confirm timing details with the Asthitva team."
    },
    {
      q: "How do I enquire about pricing for Asthitva Ullal?",
      a: "You can call or WhatsApp Asthitva to receive pricing, availability and booking details."
    }
  ],
  "wedding-venue-in-bangalore": [
    {
      q: "What type of wedding venues does Asthitva offer in Bangalore?",
      a: "Asthitva offers a variety of wedding venues, including spacious outdoor lawns at Magadi Road (Teak Meadows), elegant semi-open and covered halls at RR Nagar and Muddainapalya, and an intimate rooftop Terrace Garden at Ullal."
    },
    {
      q: "What is the guest capacity for weddings at Asthitva venues?",
      a: "Our venues cater to different sizes. Asthitva Teak Meadows and RR Nagar can host up to 800 guests, Muddainapalya accommodates up to 600, and our Terrace Garden in Ullal is ideal for intimate weddings of up to 250 guests."
    },
    {
      q: "Do you provide in-house catering and decor services?",
      a: "We offer venue-only bookings, giving you complete flexibility to bring your own decorators and caterers. We can also share a curated list of trusted local vendors to assist with your wedding planning."
    },
    {
      q: "Can we host pre-wedding rituals like Haldi and Mehendi?",
      a: "Yes, all Asthitva locations feature dedicated, beautiful spaces perfectly suited for traditional pre-wedding events, photo sessions, and family gatherings."
    }
  ],
  "reception-venue-in-bangalore": [
    {
      q: "Which Asthitva venues are best suited for hosting wedding receptions?",
      a: "All Asthitva locations (Teak Meadows, RR Nagar, Muddainapalya, and Terrace Garden) have excellent layouts, spacious dining halls, and grand backdrops specifically designed for hosting memorable wedding receptions."
    },
    {
      q: "Do you have separate dining areas for reception guests?",
      a: "Yes, our venues feature large, dedicated dining zones and modern kitchen spaces that support smooth catering operations and comfortable guest dining."
    },
    {
      q: "Can we customize the lighting and stage decoration for our reception?",
      a: "Yes. Asthitva venues are highly decor-friendly and customizable, allowing you to set up customized stages, grand lighting, floral gates, and photo booths."
    }
  ],
  "outdoor-wedding-venue-in-bangalore": [
    {
      q: "What open-air wedding venue options does Asthitva offer in Bangalore?",
      a: "We offer scenic open-air lawns surrounded by greenery at Teak Meadows (Magadi Road) and an elegant rooftop Terrace Garden in Ullal. Both are perfect for nature-themed, photo-friendly weddings."
    },
    {
      q: "What is the backup option if it rains during an outdoor event?",
      a: "Our outdoor locations feature connected covered or semi-open dining halls and event shelters, providing a convenient and quick backup solution in case of weather changes."
    },
    {
      q: "Are outdoor lawns suitable for evening reception events?",
      a: "Yes, outdoor lawns are highly popular for evening events, offering a beautiful setup under ambient lighting, moon lights, and open skies."
    }
  ],
  "birthday-party-venue-in-bangalore": [
    {
      q: "Which Asthitva venue is best for a private birthday party?",
      a: "Asthitva Terrace Garden at Ullal is highly recommended for birthday parties due to its scenic rooftop setting and cozy atmosphere. For larger celebrations, our venues at Muddainapalya and RR Nagar are great fits."
    },
    {
      q: "Can we set up custom themes and kids' game zones?",
      a: "Yes, our party venues are extremely decor-friendly. We accommodate custom birthday theme stages, balloon arches, game stalls, food carts, and kids' activity setups."
    },
    {
      q: "Is guest parking available for birthday events?",
      a: "Yes, all Asthitva event locations provide parking facilities and easy accessibility to ensure a hassle-free visit for your birthday guests."
    }
  ],
  "corporate-event-venue-in-bangalore": [
    {
      q: "What types of corporate events can be hosted at Asthitva?",
      a: "Asthitva venues are fully equipped to host annual day functions, team dinners, corporate award nights, product launches, corporate parties, and networking events."
    },
    {
      q: "Do you support professional AV setups, sound systems, and staging?",
      a: "Yes, our venues offer spacious stage layouts, ample electrical points, and robust power backup support, making them perfect for professional AV setups, projectors, and branding banners."
    },
    {
      q: "Are the corporate venues easily accessible for teams in Bangalore?",
      a: "Yes, our venues are located near key hubs like RR Nagar, Magadi Road, and Muddainapalya, ensuring easy transit and ample parking for corporate attendees."
    }
  ],
  "engagement-venue-in-bangalore": [
    {
      q: "Which Asthitva venue is ideal for a ring ceremony or engagement?",
      a: "Asthitva Muddainapalya and the Ullal Terrace Garden are highly popular for ring ceremonies due to their cozy, warm, and intimate layouts. Teak Meadows and RR Nagar are also excellent for larger engagement parties."
    },
    {
      q: "Are separate changing rooms provided for the bride and groom?",
      a: "Yes, we offer comfortable, dedicated changing rooms at our venues to ensure the couple and family members can dress up conveniently in privacy."
    }
  ],
  "party-venue-in-bangalore": [
    {
      q: "What types of private parties can we host at Asthitva?",
      a: "You can host private family get-togethers, college farewells, anniversary parties, themed gatherings, and kitty parties. We have spaces ranging from intimate rooftops to large lawns."
    },
    {
      q: "Is playing music or hiring a DJ allowed at the party venues?",
      a: "Yes, playing music and setting up sound systems/DJs is permitted at our party venues, subject to local guidelines and timing regulations."
    }
  ],
  "naming-ceremony-venue-in-bangalore": [
    {
      q: "Can we perform traditional cradling ceremonies and poojas?",
      a: "Yes, all our venues are fully compatible with traditional setups. You can place cradle decorations, perform poojas/havans, and set up traditional seating arrangements."
    },
    {
      q: "Are clean dining facilities available for naming ceremony lunches?",
      a: "Yes, our venues are equipped with spacious, hygienic dining areas and modern kitchen sections to host naming ceremony lunches and buffet spreads."
    }
  ],
  "baby-shower-venue-in-bangalore": [
    {
      q: "Do you host traditional Seemantha or baby shower functions?",
      a: "Yes, we regularly host traditional Seemantha events. The spaces are designed to provide a comfortable, auspicious, and beautiful setting for the mother-to-be and family members."
    },
    {
      q: "Is there comfortable seating and access for elderly guests?",
      a: "Yes, our venues feature convenient ground-level accessibility (or elevator access) and comfortable seating spaces to ensure elderly family members are relaxed throughout the event."
    }
  ],
  "family-function-venue-in-bangalore": [
    {
      q: "What types of family gatherings can be hosted at Asthitva?",
      a: "You can host birthdays, naming ceremonies, baby showers, engagements, family lunches, anniversary dinners, and any other private family milestone events."
    },
    {
      q: "How can we check availability and book a date?",
      a: "You can easily check event date availability by calling or messaging our team on WhatsApp. We can then schedule a venue visit to show you the venue before booking."
    }
  ]
};

const FAQ = ({ page = 'home' }) => {
  const faqs = faqData[page] || [];
  const [activeIndex, setActiveIndex] = useState(null);

  // Dynamically inject schema markup for local SEO
  useEffect(() => {
    if (!faqs.length) return;

    const schemaId = `faq-schema-${page}`;
    const existingScript = document.getElementById(schemaId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };

    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [page, faqs]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!faqs.length) return null;

  return (
    <section className="faq-section" id="faqs">
      <div className="faq-container">
        <span className="overline" style={{ display: 'block', textAlign: 'center' }}>Frequently Asked Questions</span>
        <h2 className="section-title">Common Queries</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                className={`faq-item ${isOpen ? 'active' : ''}`} 
                key={index}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  id={`faq-q-${index}`}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <span className="faq-icon-wrapper">
                    <svg 
                      className="faq-icon" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                <div 
                  className="faq-answer-container"
                  style={{
                    maxHeight: isOpen ? '250px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="faq-answer-content">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
