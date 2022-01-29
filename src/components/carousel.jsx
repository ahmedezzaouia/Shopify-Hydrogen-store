import React from 'react';
import {Image} from '@shopify/hydrogen';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div className="carousel-item">
          <Image
            src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Without"
            height={'322px'}
            width={'800px'}
          />
        </div>
        <input
          className="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div className="carousel-item">
          <Image
            src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript"
            height={'122px'}
            width={'200px'}
          />
        </div>
        <input
          className="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div className="carousel-item">
          <Image
            src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel"
            height={'122px'}
            width={'200px'}
          />
        </div>
        <label for="carousel-3" className="carousel-control prev control-1">
          ‹
        </label>
        <label for="carousel-2" className="carousel-control next control-1">
          ›
        </label>
        <label for="carousel-1" className="carousel-control prev control-2">
          ‹
        </label>
        <label for="carousel-3" className="carousel-control next control-2">
          ›
        </label>
        <label for="carousel-2" className="carousel-control prev control-3">
          ‹
        </label>
        <label for="carousel-1" className="carousel-control next control-3">
          ›
        </label>
        <ol className="carousel-indicators">
          <li>
            <label for="carousel-1" className="carousel-bullet">
              •
            </label>
          </li>
          <li>
            <label for="carousel-2" className="carousel-bullet">
              •
            </label>
          </li>
          <li>
            <label for="carousel-3" className="carousel-bullet">
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Carousel;
