import { Badge, Button, Card, Col, Container, FloatingLabel, Form, InputGroup, Row } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import SummaryCard from "../../components/Directory/SummaryCard";
import MockPropsUtil from "../../mocks/PropsFaker";

const Teachers: React.FC = () => {
  const teachers = MockPropsUtil.summaryCard.many(20);

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
          <h1 className="fs-4 mt-3">Popular Instruments</h1>
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
        <Row lg={2} sm={1} className="g-3 pb-3">
          {teachers.map((v, i) => <Col key={i}><SummaryCard {...v} /></Col>)}
        </Row>
    </Container>
  </div>
)
};

export default Teachers;