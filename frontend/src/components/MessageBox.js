import Alert from 'react-bootstrap/Alert';

export default function MessageBox(props) {
  return <Alert variant={props.variant || 'info' }data-testid = "Message">
    {props.children} 
    </Alert>;
}