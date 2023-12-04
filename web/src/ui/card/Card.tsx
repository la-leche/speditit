import { CardBody, Card as BSCard, CardTitle } from "react-bootstrap";

interface ICard {
  title?: string;
  children?: React.ReactElement | React.ReactElement[];
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "light";
  outline?: false | boolean;
  border?: "primary" | "secondary" | "success" | "warning" | "danger" | "light";
  fade?: false | boolean;
  size?: "m" | "xs" | "s" | "x" | "xl";
}

export const Card = ({ ...props }: ICard) => {
  return (
    <BSCard {...props}>
      <CardBody>
        {props.title && <CardTitle>{props.title}</CardTitle>}
        {props.children}
      </CardBody>
    </BSCard>
  );
};
