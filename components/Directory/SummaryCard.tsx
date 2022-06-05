import { Badge, Card, Col, Row } from "react-bootstrap";
import Image from "next/image";

export interface SummaryCardProps {
  name: string;
  pronouns: string;
  instruments: string[];
  ageGroups: string[];
  about: string;
  avatarUrl?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  name,
  pronouns,
  instruments,
  ageGroups,
  about,
  avatarUrl,
  ...props}) => {
    return (
      <Card className="h-100">
        <Card.Body>
          <div className="d-flex gap-3 align-items-end">
            <Image
              alt={`Avatar for ${name}`}
              className="rounded flex-shrink-0"
              height={100}
              width={100}
              src={avatarUrl != undefined ? avatarUrl : `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&size=200`}
            />
            <div className="flex-grow-1">
              <h2>{name} <small className="text-muted">({pronouns})</small></h2>
              <Row className="g-1 justify-content-between">
                <Col className="d-flex gap-1">
                  {instruments.slice(0, 3).map((v, i) => <Badge key={i} pill>{v}</Badge>)}
                  {instruments.length > 4 ? <Badge pill>+{instruments.length - 3} more</Badge> : null}
                </Col>
                <Col className="d-flex gap-1 flex-grow-0">
                  {ageGroups.map((v, i) => <Badge key={i} pill bg="secondary">{v}</Badge>)}
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div>
            <h3 className="fs-3">About Me</h3>
            <p>{about}</p>
          </div>
        </Card.Body>
      </Card>
    )
}

export default SummaryCard;