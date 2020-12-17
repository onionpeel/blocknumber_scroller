import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Web3 from 'web3';

const web3 = new Web3();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBlockNumber());
    dispatch(setBlockArray());
  }, []);



  return (
    <div>
      la la la la la
    </div>
  );
}

export default App;
