import { Card } from 'react-bootstrap';

const PageHeader = ({ text }) => (
  <>
    <Card className="bg-light">
      <Card.Body>{text}</Card.Body>
    </Card>
    <br />
  </>
);

export default PageHeader;
