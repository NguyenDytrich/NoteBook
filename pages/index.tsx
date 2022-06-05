import type { NextPage } from 'next'
import { Col, Container, Row } from 'react-bootstrap'
import { Messages } from '../components/Messages'
import { SharedFiles } from '../components/SharedFiles'
import Sidebar from '../components/Sidebar'
import { VideoLessons } from '../components/VideoLessons/'

const Home: NextPage = () => {
  return (
    <div className="d-flex bg-light" style={{height: "100vh"}}>
      {/* TODO: Media query to have better navigation on mobile devices */}
      <Sidebar />
      <Container className="py-3 h-100 px-4" style={{marginLeft: "20em"}}>
        <Row className="h-100 gap-3">
          <Col>
            <Messages messages={[
              { id: '0', title: "Tuition Processed", dateSent: "Today", read: false },
              { id: '1', title: "Tuition Processed", dateSent: "Today", read: true },
              { id: '2', title: "Tuition Processed", dateSent: "Today", read: true },
              { id: '3', title: "Tuition Processed", dateSent: "Today", read: true },
            ]} />
          </Col>
          <Col className="d-flex flex-column gap-3">
            <Row className="flex-fill shadow-sm overflow-scroll flex-shrink-0" style={{maxHeight: "50%"}}> 
              <SharedFiles files={[
                { fileId: 0, filename: "Mozart K545", dateShared: "2 mo. ago", downloadUrl: '#' },
              ]} />
            </Row>
            <Row className="flex-fill shadow-sm">
              <VideoLessons lessons={[]} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
