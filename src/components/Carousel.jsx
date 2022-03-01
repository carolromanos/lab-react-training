import { useState } from 'react';

const Carousel = ({ imgs }) => {
  const [imgNum, setImgNum] = useState(0);

  const prev = () => {
    if (imgNum === 0) {
      setImgNum(imgs.length - 1);
    } else {
      setImgNum((prev) => prev - 1);
    }
  };

  const next = () => {
    if (imgNum === imgs.length - 1) {
      setImgNum(0);
    } else {
      setImgNum((prev) => prev + 1);
    }
  };

  return (
    <div className="carousel">
      <div>
        <img alt="" src={imgs[imgNum]} className="clickable-picture" />
      </div>
      <div className="like">
        <button id="prev" onClick={prev}>
          Left
        </button>
        <button id="next" onClick={next}>
          Right
        </button>
      </div>
    </div>
  );
};

export default Carousel;