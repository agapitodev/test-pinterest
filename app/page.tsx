import Image from 'next/image';
import { Row, Typography, Link } from '@/app/_components/ui/base';
import { HomeContainer } from '@/app/_components/ui/home';

export default function Home() {
  return (
    <HomeContainer>
      <Row>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </Row>

      <Row $align="center">
        <Typography>Fake Pinterest, same idea.</Typography>
      </Row>
      <Row $align="center">
        <Image
          src="/hot-air-balloon.svg"
          alt="Hot air ballon"
          width={350}
          height={350}
          priority
        />
      </Row>

      <Row $align="center">
        <Typography $size="xs">Created by Luis Agapito 👻</Typography>
      </Row>
    </HomeContainer>
  );
}
