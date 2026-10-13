import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const venuePhoneMap = {
  ullal: {
    tel: '+918904768299',
    display: '89047 68299',
    full: '+91 89047 68299',
  },
  rrnagar: {
    tel: '+919535415379',
    display: '95354 15379',
    full: '+91 95354 15379',
  },
  muddainapalya: {
    tel: '+918904768299',
    display: '89047 68299',
    full: '+91 89047 68299',
  },
  magadi: {
    tel: '+918904768299',
    display: '89047 68299',
    full: '+91 89047 68299',
  },
  labendicion: {
    tel: '+918904768299',
    display: '89047 68299',
    full: '+91 89047 68299',
  },
  fortview: {
    tel: '+918904768299',
    display: '89047 68299',
    full: '+91 89047 68299',
  },
  default: {
    tel: '+918904768299',
    display: '89047 68299',
    full: '+91 89047 68299',
  },
};

const resolvePhone = (phoneProp, pathname) => {
  if (phoneProp) {
    const raw = phoneProp.replace(/\s+/g, '');
    const tel = raw.startsWith('+') ? raw : `+91${raw}`;
    const display = phoneProp.replace(/^\+91\s*/, '');
    return {
      tel,
      display,
      full: phoneProp.startsWith('+91') ? phoneProp : `+91 ${phoneProp}`,
    };
  }
  const path = (pathname || '').toLowerCase();
  if (path.includes('ullal')) return venuePhoneMap.ullal;
  if (path.includes('rrnagar')) return venuePhoneMap.rrnagar;
  if (path.includes('muddainapalya')) return venuePhoneMap.muddainapalya;
  if (path.includes('magadi-road') || path.includes('teak-meadows')) return venuePhoneMap.magadi;
  if (path.includes('bendicion') || path.includes('sahakar-nagar')) return venuePhoneMap.labendicion;
  if (path.includes('fort-view') || path.includes('fortview')) return venuePhoneMap.fortview;
  return venuePhoneMap.default;
};

const Navbar = ({ 
  logoText = "The Venue", 
  topBarText = "Premium event venue at Magadi Road",
  phone
}) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const phoneConfig = resolvePhone(phone, location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`top-bar ${scrolled ? 'hidden' : ''}`}>
        <span>{topBarText}</span>
      </div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="navbar-logo-top">Asthitva</span>
            <span className="navbar-logo-bottom">{logoText}</span>
          </Link>
        
        {/* Desktop nav links */}
        <ul className="nav-links">
          <li><Link to="/muddainapalya">Muddainapalya</Link></li>
          <li><Link to="/ullal">Ullal</Link></li>
          <li><Link to="/rrnagar">RR Nagar</Link></li>
          <li><Link to="/magadi-road">Magadi Road</Link></li>
          <li><Link to="/la-bendicion">Sahakar Nagar</Link></li>
          <li><Link to="/fort-view">Electronic City</Link></li>
          <li><a href={`tel:${phoneConfig.tel}`} className="nav-cta">📞 {phoneConfig.display}</a></li>
        </ul>

        {/* Mobile phone button */}
        <a href={`tel:${phoneConfig.tel}`} className="mobile-phone-btn" aria-label={`Call ${phoneConfig.full}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
          {phoneConfig.full}
        </a>
      </div>
      </nav>
    </>
  );
};

export default Navbar;
