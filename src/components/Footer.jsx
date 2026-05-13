import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const allVenues = [
  { key: 'teakmeadows', name: 'Asthitva Teak Meadows', sub: 'Magadi Road', path: '/' },
  { key: 'muddainapalya', name: 'Asthitva The Venue', sub: 'Muddainapalya', path: '/muddainapalya' },
  { key: 'ullal', name: 'Asthitva Terrace Garden', sub: 'Ullal', path: '/ullal' },
  { key: 'rrnagar', name: 'Asthitva The Venue', sub: 'RR Nagar', path: '/rrnagar' },
];

const contactData = {
  teakmeadows: {
    brand: 'Teak Meadows',
    tagline: 'By Asthitva @ Magadi Road, Bengaluru',
    address: '63/1, Kachohalli Road, Opp. HP Petrol Bunk, Kempegowda Nagar, Byadarahalli, Bengaluru 560091',
    phones: ['+91 89047 68299', '+91 9513765355'],
    copyright: 'Asthitva Teak Meadows',
  },
  muddainapalya: {
    brand: 'Asthitva The Venue',
    tagline: 'Muddainapalya, Bengaluru',
    address: 'Muddainapalya Main Rd, near RR Township, Muddainapalya, Bengaluru, Karnataka 560072',
    phones: ['+91 89047 68299', '+91 9535415379'],
    copyright: 'Asthitva The Venue',
  },
  ullal: {
    brand: 'Asthitva Terrace Garden',
    tagline: 'Ullal, Bengaluru',
    address: 'Ullal Main Rd, Ullal, Bengaluru, Karnataka 560056',
    phones: ['+91 9535415379'],
    copyright: 'Asthitva Terrace Garden',
  },
  rrnagar: {
    brand: 'Asthitva The Venue',
    tagline: 'RR Nagar, Bengaluru',
    address: 'Sy no.239, nxt to, Kenchena Halli Rd, Kalegowda Layout, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098',
    phones: ['+91 9535415379'],
    copyright: 'Asthitva The Venue',
  },
};

const Footer = ({ page = 'teakmeadows' }) => {
  const info = contactData[page] || contactData.teakmeadows;
  const otherVenues = allVenues.filter(v => v.key !== page);

  return (
    <footer className="footer">
      <div className="footer-container simplified-footer">
        <div className="footer-brand">
          <h3>{info.brand}</h3>
          <p>{info.tagline}</p>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 {info.address}</p>
          <div className="footer-phones">
            {info.phones.map((phone, i) => (
              <p key={i}>📞 <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></p>
            ))}
          </div>
        </div>

        <div className="footer-other-venues">
          <h4>Our Other Venues</h4>
          <div className="footer-venues-grid">
            {otherVenues.map(v => (
              <Link to={v.path} key={v.key} className="footer-venue-card">
                <span className="footer-venue-name">{v.name}</span>
                <span className="footer-venue-sub">@ {v.sub}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {info.copyright}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
