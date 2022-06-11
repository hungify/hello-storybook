import Page from '~/modules/common/components/Page';
import { useLocation } from 'react-router-dom';

export default function SamplePage() {
  const { pathname } = useLocation();
  return <Page.Content>pathname: {pathname}</Page.Content>;
}
