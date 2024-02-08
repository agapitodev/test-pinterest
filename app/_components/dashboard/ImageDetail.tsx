import { Modal } from '@/app/_components/ui/base';
import { CardImage } from '@/app/_components/ui/dashboard';
import { Image } from '@/app/_lib/types';

interface ImageDetailProps {
  image: Image;
  setImageSelected: (image: Image | null) => void;
}

export default function ImageDetail(props: Readonly<ImageDetailProps>) {
  return (
    <Modal onClick={() => props.setImageSelected(null)}>
      <CardImage
        image={props.image}
        setImageSelected={props.setImageSelected}
      />
    </Modal>
  );
}
