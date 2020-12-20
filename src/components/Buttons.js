import { Spinner, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { pause, resume } from '../redux/actions/isPausedActions';

export const Buttons = () => {
const isPaused = useSelector(state => state.isPaused);
const dispatch = useDispatch();

  return (
    <Row>
      <Col className="mx-auto mb-2" md={6}>
        <div className="d-flex justify-content-center">
          {
            !isPaused ?
              <Button
                className="pause-button"
                onClick={() => dispatch(pause())}
              >
                Pause incoming blocks
              </Button>
              :
              <Button
                className="resume-button"
                onClick={() => dispatch(resume())}
              >
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="paused"
                  aria-hidden="true"
                />
                Resume
              </Button>
          }
        </div>
      </Col>
    </Row>
  );
};
