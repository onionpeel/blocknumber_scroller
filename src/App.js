import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeState } from './redux/actions/initializeStateAction';

function App() {
  const dispatch = useDispatch();
  const blockArray = useSelector(state => state.blockArray);

  useEffect(() => {
    dispatch(initializeState());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {blockArray.map(block => (
          <li key={block}>{block}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
