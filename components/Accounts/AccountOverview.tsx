import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

interface AccountPreview {
  name: string;
  email?: string;
  avatarUrl?: string;
}

interface AccountOverviewProps {
  primary: AccountPreview;
  secondaries: AccountPreview[];
}

const AccountOverview: React.FC<AccountOverviewProps> = ({primary, secondaries, ...props}) => {
  return (
    <Container className="px-0">
      <Row>
        <Col className="d-flex gap-3">
          <div>
            <Image 
              alt={`Avatar for ${primary.name}`}
              className="rounded"
              width={107}
              height={107}
              src={primary.avatarUrl != undefined ? primary.avatarUrl : `https://ui-avatars.com/api/?name=${primary.name.replace(' ', '+')}&size=200}`}
            />
          </div>
          <div>
            <h1 className="mb-0">{primary.name} <small className="text-muted fs-2">(primary)</small></h1>
            <div className="fs-4 text-muted">lane.doe@gmail.com</div>
            <Button>My Account</Button>
          </div>
        </Col>
      </Row>
      <hr/>
      <h2 className="fs-4">Students</h2>
      <Row>
      {secondaries.map((v, i) => {
        return(
          <Col key={i} className="d-flex gap-3 pt-2 align-items-center">
            <div>
              <Image 
                alt={`Avatar for ${v.name}`}
                className="rounded"
                width={75}
                height={75}
                src={v.avatarUrl != undefined ? v.avatarUrl : `https://ui-avatars.com/api/?name=${v.name.replace(' ', '+')}&size=200}`}
              />
            </div>
            <div>
              <h1 className="mb-0 fs-3">{v.name}</h1>
            </div>
          </Col>
        );
      })}
      </Row>
    </Container>
  )
}

export default AccountOverview;