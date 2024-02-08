'use client';

import {
  Button,
  Row,
  TextField,
  Typography,
  Link,
} from '@/app/_components/ui/base';
import { UploadedImage } from '@/app/_lib/types';
import { firebaseService } from '@/services';
import { useEffect, useRef, useState } from 'react';

export default function UploadFile() {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const uploadFile = async () => {
    if (!fileRef.current?.files?.length) {
      return alert('You need to select a file.');
    }
    setIsLoading(true);
    try {
      const file = fileRef.current?.files[0];
      await firebaseService.createPublicImage(file);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    firebaseService.subscribeUploadImages(setUploadedImages);
  }, []);

  return (
    <>
      <Row $gutterX>
        <TextField type="file" ref={fileRef} />
      </Row>
      <Row $gutterX>
        <Button $variant="contained" $color="primary" onClick={uploadFile}>
          {isLoading ? 'Uploading...' : 'Upload'}
        </Button>
      </Row>
      <Typography $color="auxiliar" $size="lg">
        Uploaded images
      </Typography>
      {uploadedImages.map((item) => (
        <Row key={item.id}>
          <Typography>{item.name}:</Typography>
          <Link href={item.url}>{item.url}</Link>
        </Row>
      ))}
    </>
  );
}
