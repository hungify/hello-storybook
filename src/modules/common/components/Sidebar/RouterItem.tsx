import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import Item from './Item';

interface RouterItemProps {
  label: string;
  href: string;
  [key: string]: any;
}

export default function RouterItem({ href, ...props }: RouterItemProps) {
  const resolved = useResolvedPath(href);
  const match = useMatch({ path: resolved.pathname, end: true });

  return <Item to={href} active={match ? true : false} as={Link} {...props} />;
}
