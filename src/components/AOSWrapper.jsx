import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div>{children}</div>;
};

export default AOSWrapper;