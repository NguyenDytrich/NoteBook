import { Card, ListGroup } from "react-bootstrap"
import DashboardCard from "../Base/DashboardCard";
import ListCard from "../Base/ListCard";

interface Message {
  id: string;
  title: string;
  dateSent: string;
  read: boolean;
}

const Messages: React.FC<{messages: Message[]}> = ({messages, ...props}) => {
  return (
    <DashboardCard
      title="Messages"
      className="h-100"
      {...props}
    >
      <ListGroup variant="flush">
        {
          messages.length > 0 ? messages.map((item) => (
            <ListGroup.Item
              key={item.id}
              className={item.read ? "bg-light bg-opacity-25 text-body text-opacity-50" : ""}
            >
              <div className="d-flex">
                <div className="me-3"><b>{item.title}</b></div>
                <div className="ms-auto">{item.dateSent}</div>
              </div>
            </ListGroup.Item>
          ))
          : <div className="text-center text-muted pt-3">No messages to display.</div>
        }
        { messages.length > 0 ? <hr className="mb-1" style={{ height: 0 }} /> : null }
      </ListGroup>
    </DashboardCard>
  )
}

/*
<Card className="px-0 shadow-sm h-100">
  <Card.Title className="px-3 pt-3 pb-2">Messages</Card.Title>
  <ListGroup variant="flush">
    <ListGroup.Item>
      <div className="d-flex">
        <div className="me-3"><b>Tuition Processed</b></div>
        <div className="ms-auto">Today</div>
      </div>
    </ListGroup.Item>
    <ListGroup.Item className="bg-light bg-opacity-25 text-body text-opacity-50">
      <div className="d-flex">
        <div className="me-3"><b>Homework from Today</b></div>
        <div className="ms-auto">2 days ago</div>
      </div>
    </ListGroup.Item>
    <ListGroup.Item className="bg-light bg-opacity-25 text-body text-opacity-50">
      <div className="d-flex">
        <div className="me-3"><b>Tuition Processed</b></div>
        <div className="ms-auto">1 mo. ago</div>
      </div>
    </ListGroup.Item>
    <div></div>
  </ListGroup>
</Card>
*/


export { Messages };