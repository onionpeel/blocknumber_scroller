import { Col } from 'react-bootstrap';
import { Block } from './Block';

export const BlockCol = ({blockArray}) => (
  <Col className="block-container mx-auto" md={6}>
    {blockArray.map(blockNumber => (
      <Block blockNumber={blockNumber} key={blockNumber} />
    ))}
  </Col>
);
