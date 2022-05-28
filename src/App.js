import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageComp from './components/ImageComp';
import addOneNumber from './actions';

const slowFunction = (number) => {
  for (let index = 0; index < 1000000000; index++) {}
  return number * 2;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  const imageData = useSelector((state) => state.imageReducer);
  const totalNumber = imageData.reduce((sum, curr) => sum + curr.number, 0);
  console.log({ totalNumber });
  const dispatch = useDispatch();
  console.log({ imageData });

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div
      style={{
        marginTop: '1 rem',
        display: 'flex',
        flexDirection: 'column',
        width: '50rem',
        height: '100%',
        backgroundColor: 'powderblue',
        alignContent: 'center',
        margin: 'auto',
        alignItems: 'center',
      }}
    >
      <h1> {counter}</h1>
      <button
        style={{ height: '5rem', margin: '2rem', width: '10rem' }}
        onClick={increment}
      >
        Increment with 1
      </button>

      <input
        style={{ width: '9.5rem' }}
        placeholder="write the number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1> {doubleNumber}</h1>

      <h1>Total times the picture is clicked</h1>
      <h1>{totalNumber}</h1>
      {React.Children.toArray(
        imageData.map((d) => (
          <ImageComp
            image={d.url}
            number={d.number}
            dispatch={() => dispatch(addOneNumber(d.id))}
          />
        ))
      )}
    </div>
  );
};

export default App;
