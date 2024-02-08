import UploadFile from '@/app/_components/dashboard/UplloadFile';
import { Typography } from '@/app/_components/ui/base';

export default function Uploads() {
  return (
    <>
      <Typography as="h2" $size="3xl" $color="primary">
        Uploads page
      </Typography>
      <UploadFile />
    </>
  );
}
