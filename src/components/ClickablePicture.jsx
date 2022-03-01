import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  
  const [image, setImage] = useState(img);
  const toggleImage = () =>
    image === img ? setImage(imgClicked) : setImage(img);

  return (
  
    <img
      src={image}
      alt=""
      onClick={toggleImage}
      className="clickable-picture"
    />

  );
};

export default ClickablePicture;