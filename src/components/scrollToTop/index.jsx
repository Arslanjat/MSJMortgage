import React from 'react';
import scrollToTop from '../../common/scrollToTop';

const ScrollToTop = () => {
    React.useEffect(() => {
        scrollToTop()
    }, [])
  return (
    <div className="progress-wrap cursor-pointer">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="" />
      </svg>
    </div>
  );
};

export default ScrollToTop;
