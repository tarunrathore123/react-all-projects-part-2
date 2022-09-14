import './carousel.scss';
import { useSwipeable } from 'react-swipeable';
import { CarouselLeftIcon, CarouselRightIcon } from '../assets';

import React, { useEffect, useState } from 'react';

const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children, setSlide }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 1000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
    setSlide(newIndex);
  };
  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div className="indicators">
        <img
          src={CarouselLeftIcon}
          alt=""
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        />

        <p>{activeIndex + 1 + '/' + React.Children.count(children)}</p>

        <img
          src={CarouselRightIcon}
          alt=""
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      </div>
    </div>
  );
};

export { Carousel, CarouselItem };
