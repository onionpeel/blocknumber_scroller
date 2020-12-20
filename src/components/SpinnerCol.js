import { Spinner, Col } from 'react-bootstrap';

export const SpinnerCol = () => (
  <Col className="spinner mx-auto d-flex justify-content-center" md={6}>
      <Spinner
        animation="border"
        variant="dark"
        role="loading"
      />
  </Col>
);
