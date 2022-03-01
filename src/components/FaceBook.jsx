import { useState, useEffect } from 'react';
import people from '../data/berlin.json';

const FaceBook = () => {
  const [selected, setSelected] = useState('');
  const [buttonArray, setButtonArray] = useState([]);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const buttons = people
      .map((el) => el.country)
      .filter((country, index, array) => array.indexOf(country) === index);
    setButtonArray(buttons);
    setProfiles(people);
  }, []);

  return (
    <div>
      <div className="facebook-buttons">
        <button
          className={selected === '' ? 'blue' : ''}
          onClick={() => setSelected('')}
        >
          All
        </button>
        {buttonArray.map((country, i) => {
          return (
            <button
              key={i}
              className={country === selected ? 'blue' : ''}
              onClick={(e) => setSelected(country)}
            >
              {country}
            </button>
          );
        })}
      </div>

      <div>
        {profiles.map((person, i) => {
          return (
            <div
              className={`card ${person.country === selected ? 'blue' : ''}`}
              key={i}
            >
              <div className="left">
                <img alt="" src={person.img} />
              </div>
              <div className="right">
                <p>
                  <strong>First Name: </strong>
                  {person.firstName}
                </p>
                <p>
                  <strong>Last Name: </strong>
                  {person.lastName}
                </p>
                <p>
                  <strong>Country: </strong>
                  {person.country}
                </p>
                <p>
                  <strong>Type: </strong>
                  {person.isStudent === false ? 'Teacher' : 'Student'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceBook;