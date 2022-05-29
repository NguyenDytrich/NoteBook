import { Nav } from "react-bootstrap";

const Sidebar: React.FC = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 h-100 p-3 bg-body shadow-sm"
      style={{width: "20em"}}
    >
      <h1>NoteBook</h1>
      <hr/>
      <Nav variant="pills" activeKey="1" className="flex-column mb-auto fs-5" as="ul">
        <Nav.Item as="li">
          <Nav.Link eventKey="1"><i className="bi-house me-2"></i>Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="2"><i className="bi-camera-video me-2"></i>Meeting Room</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link><i className="bi-person-circle me-2"></i>Account & Payments</Nav.Link>
        </Nav.Item>
      </Nav>
      <hr/>
    </div>
  )
}

export default Sidebar;