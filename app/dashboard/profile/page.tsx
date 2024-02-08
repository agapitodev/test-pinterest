'use client';

import {
  FloatingActionButton,
  Typography,
  Row,
} from '@/app/_components/ui/base';
import { deleteSession } from '@/utils/Auth';
import { IoLogOutOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();

  const logout = () => {
    deleteSession();
    router.refresh();
  };
  return (
    <>
      <Typography as="h2" $size="3xl" $color="primary">
        Profile page
      </Typography>
      <Row $gutterX>
        <FloatingActionButton
          $variant="outlined"
          $color="primary"
          onClick={logout}
        >
          <IoLogOutOutline />
        </FloatingActionButton>
      </Row>
    </>
  );
}
