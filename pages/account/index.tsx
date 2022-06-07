import type { NextPage } from 'next'
import { Badge, Button, ButtonGroup, Card, Col, Container, Form, InputGroup, Row, Table } from 'react-bootstrap'
import DashboardCard from '../../components/Base/DashboardCard'
import Sidebar from '../../components/Sidebar'
import Image from 'next/image';
import { VictoryContainer, VictoryPie } from 'victory';
import { VictoryTheme } from 'victory';
import SecondaryAccountForm from '../../components/Accounts/SecondaryAccountForm';
import AccountOverview from '../../components/Accounts/AccountOverview';

const Account: NextPage = () => {
  return (
    <div className="d-flex bg-light">
      {/* TODO: Media query to have better navigation on mobile devices */}
      <Sidebar />
      <Container className="py-3 h-100 pe-4" style={{marginLeft: "20em"}}>
        <Row className="h-100">
          <Col>
            <DashboardCard className="p-3">
              <h1>Account</h1>
              <AccountOverview primary={{
                  name: "Jane Doe",
                  email: "jane.doe@gmail.com"
                }}

                secondaries={[
                  {
                    name: "Lena Doe",
                  },
                  {
                    name: "John Doe",
                  },
                ]}
              />
              {/*
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
                  <h2>Jane Doe <small className="text-muted">(primary)</small></h2>
                  <Form.Label>Email</Form.Label>
                  <Form.Control value="jane.doe@gmail.com"></Form.Control>
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control type="password" placeholder="password" value="password"></Form.Control>
                    <InputGroup.Text><i className="bi-eye-fill opacity-75" /></InputGroup.Text>
                  </InputGroup>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control value="(000) 000 0000"></Form.Control>
                </div>
              </div>
              */}
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
              <div className="d-flex">
                <div className="w-50">
                  <h1>Payments</h1>
                  <span><a href="#">View Invoice</a></span>
                  <div>
                    <h2>Current Balance</h2>
                    <div className="fs-1">${60 * 4 + 40 * 4 + 40 * 2}</div>
                    <Badge bg="danger">Overdue</Badge>
                  </div>
                  <VictoryPie 
                    containerComponent={
                      <VictoryContainer style={{height: 500}} />
                    }
                    theme={VictoryTheme.material}
                    data={[
                      { x: "Jane", y: 60 * 4 },
                      { x: "John", y: 40 * 4 },
                      { x: "Lena", y: 40 * 2 },
                    ]}
                  />
                </div>
                <div className="flex-grow-1" style={{marginTop: "4.75rem"}}>
                  <h2>Payment History</h2>
                  <Table>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>06/01/22</td>
                        <td>$480.00</td>
                        <td><Badge bg="warning">Processing</Badge></td>
                      </tr>
                      <tr>
                        <td>05/01/22</td>
                        <td>$480.00</td>
                        <td><Badge bg="success">Paid</Badge></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </DashboardCard>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Account;
