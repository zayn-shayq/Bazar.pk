import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status" data-testid = "Loading">
      <span className="visually-hidden" data-testid = "Loading_Logo">Loading...</span>
    </Spinner>
  );
}