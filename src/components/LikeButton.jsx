import { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const getColor = () => {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    return colors[likes % colors.length];
  };

  return (
    <div>
      <button
        onClick={() => setLikes((prev) => prev + 1)}
        style={{ backgroundColor: getColor(), color: 'white' }}
      >
        {likes} Like{likes !== 1 && 's'}
      </button>
    </div>
  );
};

export default LikeButton;