import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Skip initial page load since the head script handles the first config/pageview
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Send SPA page_view event on subsequent route transitions
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
        send_to: 'AW-10989233345',
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
