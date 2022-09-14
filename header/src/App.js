import './App.scss';
import Header from './components/header';
import { Carousel, CarouselItem } from './components/carousel';
import { CarouselImage } from './assets';
import { useState } from 'react';

function App() {
  const [slide, setSlide] = useState(0);
  // console.log(slide);
  return (
    <>
      <Header />;
      <div className="carouselWrapper">
        <Carousel setSlide={setSlide}>
          <CarouselItem>
            <div className="container">
              <div className="imageContainer">
                <img src={CarouselImage} alt="" />
              </div>
              <div className="leftContent">
                <div className="content">
                  <h1>
                    Stopping smoking can positively impact your physical and
                    mental health.
                  </h1>
                  <p>
                    Nicorette with Mental Health UK are helping communities to
                    make quitting less of a stressful journey.
                  </p>
                  <button>visit wellness hub</button>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="container">
              <div className="imageContainer">
                <img src={CarouselImage} alt="" />
              </div>
              <div className="leftContent">
                <div className="content">
                  <h1>
                    Stopping smoking can positively impact your physical and
                    mental health.
                  </h1>
                  <p>
                    Nicorette with Mental Health UK are helping communities to
                    make quitting less of a stressful journey.
                  </p>
                  <button>visit wellness hub</button>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="container">
              <div className="imageContainer">
                <img src={CarouselImage} alt="" />
              </div>
              <div className="leftContent">
                <div className="content">
                  <h1>
                    Stopping smoking can positively impact your physical and
                    mental health.
                  </h1>
                  <p>
                    Nicorette with Mental Health UK are helping communities to
                    make quitting less of a stressful journey.
                  </p>
                  <button>visit wellness hub</button>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="container">
              <div className="imageContainer">
                <img src={CarouselImage} alt="" />
              </div>
              <div className="leftContent">
                <div className="content">
                  <h1>
                    Stopping smoking can positively impact your physical and
                    mental health.
                  </h1>
                  <p>
                    Nicorette with Mental Health UK are helping communities to
                    make quitting less of a stressful journey.
                  </p>
                  <button>visit wellness hub</button>
                </div>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
        <div className="activeSlide">
          <li className={`${slide == 0 ? 'active' : ''}`}></li>
          <li className={`${slide == 1 ? 'active' : ''}`}></li>
          <li className={`${slide == 2 ? 'active' : ''}`}></li>
          <li className={`${slide == 3 ? 'active' : ''}`}></li>
        </div>
        {/* <div className="numbering">1/4</div> */}
      </div>
    </>
  );
}

export default App;
