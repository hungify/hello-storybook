import { Link } from 'react-router-dom';
import Item from './Item';

interface RouterItemProps {
  label: string;
  href: string;
  [key: string]: any;
}

const RouterItem = ({ href, ...props }: RouterItemProps) => {
  return <Item as={Link} to={href} active={true} {...props} />;
};

export default RouterItem;
