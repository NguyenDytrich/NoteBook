import { Col, Form, Row } from "react-bootstrap";

interface SecondaryAccountProps {
  name: string;
  birthday: string;
  pronouns: string;
  email?: string;
  phone?: string;
  about?: string;
  notes?: string;
}

const SecondaryAccountForm: React.FC<SecondaryAccountProps> = ({
  name,
  birthday,
  pronouns,
  email,
  phone,
  about,
  notes,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <Row>
        <Col>
          <Form.Label>Birthday</Form.Label>
          <Form.Control value={birthday}></Form.Control>
          <Form.Label>Pronouns</Form.Label>
          <Form.Control value={pronouns}></Form.Control>
        </Col>
        <Col>
          <Form.Label>Email <span className="text-muted">(optional)</span></Form.Label>
          <Form.Control value={email}></Form.Control>
          <Form.Label>Phone <span className="text-muted">(optional)</span></Form.Label>
          <Form.Control value={phone}></Form.Control>
        </Col>
      </Row>
      <Form.Label>About {name.split(' ')[0]} <span className="text-muted">(optional)</span></Form.Label>
      <Form.Control type="textarea" value={about}></Form.Control>
      <Form.Label>Additional Notes for Teachers <span className="text-muted">(optional)</span></Form.Label>
      <Form.Control type="textarea" value={notes}></Form.Control>
    </>
  )
}

export default SecondaryAccountForm;