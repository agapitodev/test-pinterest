import { LoginForm, SocialProviders } from '@/app/_components/authentication';
import { Container, Typography, Link } from '@/app/_components/ui/base';

export default function Login() {
  return (
    <Container>
      <Typography as="h1" $size="3xl" $color="primary" $isBold>
        Login
      </Typography>
      <SocialProviders />
      <Typography $size="sm">Or use your email:</Typography>
      <LoginForm />
      <Link href="/">Back to home</Link>
    </Container>
  );
}
