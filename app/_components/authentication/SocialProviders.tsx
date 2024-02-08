import { Row, FloatingActionButton } from '@/app/_components/ui/base';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';

export default function SocialProviders() {
  return (
    <Row $align="center" $gutterX>
      <FloatingActionButton $variant="outlined">
        <FaGoogle />
      </FloatingActionButton>
      <FloatingActionButton $variant="outlined">
        <FaFacebookF />
      </FloatingActionButton>
      <FloatingActionButton $variant="outlined">
        <FaTwitter />
      </FloatingActionButton>
      <FloatingActionButton $variant="outlined">
        <SlSocialVkontakte />
      </FloatingActionButton>
    </Row>
  );
}
