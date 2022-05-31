import type { NextPage } from 'next'
import { Badge, Card, Col, Container, Form, InputGroup, Row, Table } from 'react-bootstrap'
import DashboardCard from '../../components/Base/DashboardCard'
import Sidebar from '../../components/Sidebar'
import Image from 'next/image';

const Account: NextPage = () => {
  return (
    <div className="d-flex bg-light" style={{height: "100vh"}}>
      {/* TODO: Media query to have better navigation on mobile devices */}
      <Sidebar />
      <Container className="py-3 h-100 pe-4">
        <Row className="h-100">
          <Col>
            <DashboardCard className="p-3">
              <h1>Profile</h1>
              <div className="d-flex gap-5">
                <Image
                  className="rounded"
                  width={150}
                  height={150}
                  src="https://ui-avatars.com/api/?name=Jane+Doe&size=300"
                  layout="fixed"
                  alt="Your profile picture"
                />
                <div className="flex-grow-1">
                  <h2>Jane Doe</h2>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control value="(000) 000 0000"></Form.Control>
                  <Form.Label>Email</Form.Label>
                  <Form.Control value="jane.doe@gmail.com"></Form.Control>
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control type="password" placeholder="password" value="password"></Form.Control>
                    <InputGroup.Text><i className="bi-eye-fill opacity-75" /></InputGroup.Text>
                  </InputGroup>
                </div>
              </div>
              <h1>Enrollment</h1>
              <div>
                <Table>
                  <thead>
                    <tr>
                      <th>Student</th>
                      <th>Teacher</th>
                      <th>Tuition</th>
                      <th>Schedule</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jane Doe</td>
                      <td>Johnny Appleseed</td>
                      <td>$60 @ 1hr lesson</td>
                      <td>Weekly</td>
                      <td><Badge bg="success">Ongoing</Badge></td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>Marge Simpson</td>
                      <td>$40 @ 30m lesson</td>
                      <td>Weekly</td>
                      <td><Badge bg="warning">Hold</Badge></td>
                    </tr>
                    <tr>
                      <td>Lena Doe</td>
                      <td>Marge Simpson</td>
                      <td>$40 @ 30m lesson</td>
                      <td>Bi-weekly</td>
                      <td><Badge bg="danger">Discontinued</Badge></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </DashboardCard>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Account;
