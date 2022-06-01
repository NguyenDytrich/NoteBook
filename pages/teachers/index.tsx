import { Badge, Button, Card, Col, Container, FloatingLabel, Form, InputGroup, Row } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import { loremIpsum } from "lorem-ipsum";

const Teachers: React.FC = () => {
  return (
    <div className="d-flex bg-light" style={{ height: "100vh" }}>
      <Sidebar />
      <Container className="py-3 h-100 px-4" style={{marginLeft: "20em"}}>
        <Row>
          <InputGroup className="d-flex">
            <FloatingLabel controlId="searchInput" label="Search" className="flex-grow-1">
              <Form.Control placeholder="Search" />
            </FloatingLabel>
            <Button variant="secondary"><i className="bi-search fs-5"></i></Button>
          </InputGroup>
        </Row>
        <Row className="mb-3">
          Popular Instruments
          <div className="d-flex gap-2">
            <Badge pill bg="secondary" className="px-3 fs-6">piano</Badge>
            <Badge pill bg="secondary" className="px-3 fs-6">guitar</Badge>
            <Badge pill bg="secondary" className="px-3 fs-6">ukulele</Badge>
            <Badge pill bg="secondary" className="px-3 fs-6">violin</Badge>
          </div>
        </Row>
        <Row>
          <h1>Results</h1>
        </Row>
        <Row lg={3} className="g-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title><h2>Louis Lane</h2></Card.Title>
                <div className="d-flex gap-1">
                  <Badge pill>Piano</Badge>
                  <Badge pill>Guitar</Badge>
                  <Badge pill>Ukulele</Badge>
                </div>
                <div>
                  <h3 className="fs-3">About Me</h3>
                  <p>{loremIpsum({
                    count: 1,
                    units: "paragraphs",
                  })}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Daphne Lane</Card.Title>
                <span>Trumpet | Piano</span>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Daphne Lane</Card.Title>
                <span>Trumpet | Piano</span>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Daphne Lane</Card.Title>
                <span>Trumpet | Piano</span>
              </Card.Body>
            </Card>
          </Col>

        </Row>
    </Container>
  </div>
)
};

export default Teachers;