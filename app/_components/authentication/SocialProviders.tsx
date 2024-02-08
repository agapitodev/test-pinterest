'use client';

import { Row, FloatingActionButton } from '@/app/_components/ui/base';
import { firebaseService } from '@/services';
import { authenticate } from '@/utils/Auth';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { useRouter } from 'next/navigation';

export default function SocialProviders() {
  const router = useRouter();

  const accessWithGoogle = async () => {
    try {
      const user = await firebaseService.accessWithGoogleProvider();
      authenticate(JSON.stringify(user));
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row $align="center" $gutterX>
      <FloatingActionButton $variant="outlined" onClick={accessWithGoogle}>
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
