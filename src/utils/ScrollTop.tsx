/* eslint-disable react/jsx-no-useless-fragment */
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router';

type ScrollTopProps = {
  children: ReactNode;
};

const ScrollToTop = ({ children }: ScrollTopProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
