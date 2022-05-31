import { Nav } from "react-bootstrap";
import NavLink from "./Base/NavLink";

const Sidebar: React.FC = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 h-100 p-3 bg-body shadow-sm"
      style={{width: "20em"}}
    >
      <h1>NoteBook</h1>
      <hr/>
      <Nav variant="pills" className="flex-column mb-auto fs-5" as="ul">
        <Nav.Item as="li">
          <NavLink href="/"><i className="bi-house me-2"></i>Dashboard</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link><i className="bi-camera-video me-2"></i>Meeting Room</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink href="/account"><i className="bi-person-circle me-2"></i>Account & Payments</NavLink>
        </Nav.Item>
      </Nav>
      <hr/>
    </div>
  )
}

export default Sidebar;