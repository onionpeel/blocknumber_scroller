import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeState } from './redux/actions/initializeStateAction';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { BlockRow } from './components/BlockRow';
import { Buttons } from './components/Buttons';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeState());
  }, [dispatch]);


  return (
    <div className="app">
      <Header />
      <h5 className="explanation mb-3">
        These are the ten most recent blocks mined on Ethereum.  Updates occur every five seconds.
      </h5>
      <Container>
        <Buttons />
        <BlockRow />
      </Container>
    </div>
  );
}

export default App;
