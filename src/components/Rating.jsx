const Rating = ({ children }) => {
    const starGenerator = (stars) =>
      ''.padStart(5 - Math.round(stars), '☆').padStart(5, '★');
    // '★'.repeat(stars) + '☆'.repeat(5 - stars)
  
    return <div>{starGenerator(children)}</div>;
  };
  
  export default Rating;