import visaLogo from './../assets/images/visa.png';
import masterLogo from './../assets/images/master-card.svg';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const typeSelector = (type) =>
    type.toLowerCase() === 'visa' ? visaLogo : masterLogo;

  const maskedNumber = (num) => num.slice(-4);

  const formatDate = (expMonth, expYear) => {
    const month = ('0' + expMonth).slice(-2);
    const year = String(expYear).slice(-2);
    return `${month}/${year}`;
  };

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor }}>
      <div className="card-type">
        <img src={typeSelector(type)} alt="type" />
      </div>
      <p className="card-number" style={{ color: color }}>
        <strong>···· ···· ···· </strong>
        {maskedNumber(number)}
      </p>
      <div className="card-owner" style={{ color: color }}>
        <p>
          Expires {formatDate(expirationMonth, expirationYear)} {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;