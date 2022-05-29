import { Card, CardProps } from "react-bootstrap";

interface DashboardCardProps extends CardProps {
  children: React.ReactNode;
  title?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({children, title, ...props}) => {
  return (
    <Card {...props}>
      { title != undefined ? 
        <Card.Title className="px-3 pt-3 pb-2">{title}</Card.Title>
        : null }
      { children }
    </Card>
  )
}

export default DashboardCard;