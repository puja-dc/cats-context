import React, { useContext } from 'react';
import StateContext from '../context';

const Activity = () => {
  const [value, dispatch] = useContext(StateContext);

  const handleClick = e => {
    e.preventDefault();
    dispatch({
      type: 'changeActivity',
      activity: e.target.value
    });
  };
  const handleChange = e => {
    e.preventDefault();
    dispatch({
      type: 'changeName',
      newName: e.target.value
    });
  };

  return (
    <div>
      <h1>
        Itty Bitty's Activity{' '}
        <span role='img' aria-label='cat'>
          🐱
        </span>
      </h1>
      <p>
        {value.name} is {value.activity}.
      </p>
      <p>
        <input
          type='text'
          name='newName'
          placeholder='Cat Name'
          onChange={handleChange}
        />
      </p>
      <ul>
        <li>
          <button className='btn' onClick={handleClick} value='napping'>
            Napping
          </button>
        </li>
        <li>
          <button className='btn' onClick={handleClick} value='eating'>
            Eating
          </button>
        </li>
        <li>
          <button className='btn' onClick={handleClick} value='playing'>
            Playing
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Activity;
