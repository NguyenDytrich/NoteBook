import { CardProps, ListGroup, ListGroupItemProps, ListGroupProps } from "react-bootstrap";
import DashboardCard from "./DashboardCard";

interface ListCardProps<T> extends CardProps {
  title?: string;
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  data: T[];
  emptyMessage: string;
};

const ListCard = <T extends unknown>({
  title,
  data,
  renderItem,
  keyExtractor,
  emptyMessage,
  ...props
}: ListCardProps<T>) => {

  return (
    <DashboardCard title={title} {...props}>
      <ListGroup variant="flush">
      {
        data.length > 0 ? data.map((item) => (
          <ListGroup.Item key={keyExtractor(item)}>
            {renderItem(item)}
          </ListGroup.Item>
        ))
        : <div className="text-center text-muted pt-3">{emptyMessage}</div>
      }
      { data.length > 0 ? <hr className="mb-1" style={{ height: 0 }}/> : null }
      </ListGroup>
    </DashboardCard>
  )
}

export default ListCard;