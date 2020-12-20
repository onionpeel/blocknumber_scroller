import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BlockCol } from './BlockCol';
import { SpinnerCol } from './SpinnerCol';

export const BlockRow = () => {
  const blockArray = useSelector(state => state.blockArray);
  const isLoading = useSelector(state => state.isLoading);

  const checkLoading = () => isLoading ? <SpinnerCol /> : <BlockCol blockArray={blockArray}/>

  return (
      <Row>
        {checkLoading()}
      </Row>
  );
};
