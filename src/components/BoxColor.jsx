const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
   };

  const hexColor = (r, g, b) =>
    `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  return (
    <div style={divStyle} className="box-color">
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{hexColor(r, g, b)}</p>
    </div>
  );
};

export default BoxColor;