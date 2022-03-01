const NumbersTable = ({ limit }) => {
    const buildNumbersArray = (num) => new Array(num).fill(0).map((e, i) => i + 1);
  
    return (
      <div className="iteration12">
        {buildNumbersArray(limit).map((number, i) => {
          return number % 2 === 0 ? (
            <div className="numbers-table red" key={i}>
              {number}
            </div>
          ) : (
            <div className="numbers-table white" key={i}>
              {number}
            </div>
          );
        })}
      </div>
    );
  };
  
  export default NumbersTable;