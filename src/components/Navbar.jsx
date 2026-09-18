import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const venuePhoneMap = {
  ullal: {
    tel: '+918147095583',
    display: '81470 95583',
    full: '+91 81470 95583',
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
          <li><Link to="/la-bendicion">La Bendicion</Link></li>
          <li><Link to="/fort-view">Fort View</Link></li>
          <li><a href={`tel:${phoneConfig.tel}`} className="nav-cta">📞 {phoneConfig.display}</a></li>
        </ul>

        {/* Mobile phone button */}
        <a href={`tel:${phoneConfig.tel}`} className="mobile-phone-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          {phoneConfig.full}
        </a>
      </div>
      </nav>
    </>
  );
};

export default Navbar;
