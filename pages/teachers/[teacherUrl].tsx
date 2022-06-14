import { useRouter } from 'next/router';
import { Button, Card, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import TeacherProfile from '../../components/Directory/TeacherProfile';
import Sidebar from '../../components/Sidebar';
import Image from 'next/image';
import styles from '../../styles/availability.module.scss'
import { useState } from 'react';

const Availability: React.FC<{matrix: number[][]}> = ({matrix, ...props}) => {

  const [showSignupModal, setShowSignupModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);

  const toggleSignupModal = () => setShowSignupModal(!showSignupModal);

  return (
    <>
    <SignupModal show={showSignupModal} handleClose={toggleSignupModal} startTime={selectedTime || ""} />
    <Table bordered responsive="lg">
      <thead>
        <tr className="text-center">
          <th></th>
          <th scope="col">Mon</th>
          <th scope="col">Tue</th>
          <th scope="col">Wed</th>
          <th scope="col">Thu</th>
          <th scope="col">Fri</th>
          <th scope="col">Sat</th>
          <th scope="col">Sun</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{width: "4rem"}}></td>
          {Array<number>(7).fill(0).map((v,i) => <td key={i} className="bg-light"></td>)}
        </tr>
        {
          matrix.map((v, i) => {
            return (
              <tr key={i}>
                <th style={{width: "4rem"}} scope="row">{9 + i}:00</th>
                {
                  v.map((k, j) => {
                    return <AvailabilityCell
                        key={`${k} ${j}`}
                        onClick={() => {
                          setSelectedTime(`${9 + i}:00`);
                          toggleSignupModal();
                        }}
                        available={k == 0} 
                      />
                  })
                }
              </tr>
            );
          })
        }
        <tr>
          <th style={{width: "4rem"}} scope="row">22:00</th>
          {Array<number>(7).fill(0).map((v,i) => <td key={i} className="bg-light"></td>)}
        </tr>
      </tbody>
    </Table>
    </>
  )
};

const AvailabilityCell: React.FC<{available: boolean, onClick: () => void}> = ({available, onClick}) => {
  const [hovering, setHovering] = useState(false);
  return (
    <td
      className={available ? [styles.cell, styles.available].join(' ') : "bg-light"}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={onClick}
    >
      {hovering && available ? "Signup" : null}
    </td>
  )
}

const SignupModal: React.FC<{
    show: boolean,
    handleClose: () => void,
    startTime: string
  }> = ({
    show, 
    handleClose,
    startTime
  }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <a style={{textAlign: "center"}} href="#">view as page</a>
        </div>
        <div className="fs-4"><b>Tuesdays</b> at <b>{startTime}</b> with <b>John Doe</b></div>
        <Form>
          <Form.Label>Instrument:</Form.Label>
          <Form.Select>
            <option>Choose instrument...</option>
            <option value="piano">Piano</option>
            <option value="guitar">Guitar</option>
          </Form.Select>
          <Form.Label>Student:</Form.Label>
          <Form.Select>
            <option>Choose student...</option>
            <option value="primary">Myself (Jane Doe)</option>
            <option value="secondary-1">Lena Doe</option>
            <option value="secondary-2">Abe Doe</option>
          </Form.Select>
          <h2>John&apos;s Tuition Plans for <b>piano lessons</b></h2>
          <div>
            <span>Per lesson tuition:</span>
            <Table>
              <thead>
                <tr>
                  <th scope="col">Rate</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$70</td>
                  <td>60m</td>
                </tr>
                <tr>
                  <td>$40</td>
                  <td>30m</td>
                </tr>
              </tbody>
            </Table>
            <span>Recurring tuition*:</span>
            <Table>
              <thead>
                <tr>
                  <th scope="col">Rate</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$60</td>
                  <td>60m</td>
                </tr>
                <tr>
                  <td>$30</td>
                  <td>30m</td>
                </tr>
              </tbody>
            </Table>
            <div>*<b>Note</b>: payments are charged on the first of each month.</div>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const Teacher: React.FC = () => {
  const router = useRouter();
  const { teacherUrl } = router.query;

  return (
    <div className="d-flex bg-light" style={{ height: "100vh" }}>
      <Sidebar />
      <Container className="py-3 h-100 px-4" style={{marginLeft: "20em"}}>
        <Card>
          <div className="card-img-top" style={{position: 'relative', height: 212}}>
            <Image
              alt="Banner image"
              layout="fill"
              height="512"
              width="512"
              src="https://ui-avatars.com/api/?name=John+Doe&size=512"/>
          </div>
          <Card.Body>
            <TeacherProfile />
            <div>
              <h2>Availability</h2>
              <Availability matrix={
                [
                  [1, 1, 1, 1, 1, 1, 1],
                  [1, 1, 1, 1, 1, 1, 1],
                  [1, 1, 1, 1, 1, 1, 1],
                  [0, 1, 0, 0, 0, 1, 1],
                  [0, 0, 0, 0, 0, 1, 1],
                  [0, 0, 1, 0, 0, 1, 1],
                  [0, 0, 1, 0, 0, 1, 1],
                  [0, 0, 0, 0, 0, 1, 1],
                  [0, 0, 1, 1, 0, 1, 1],
                  [0, 0, 0, 1, 0, 1, 1],
                  [0, 0, 1, 1, 0, 1, 1],
                  [0, 0, 0, 0, 0, 1, 1],
                  [0, 0, 0, 0, 0, 1, 1],
                ]
              } />
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Teacher;