import { SignupForm, SocialProviders } from '@/app/_components/authentication';
import { Container, Typography, Link } from '@/app/_components/ui/base';

export default function Signup() {
  return (
    <Container>
      <Typography as="h1" $size="3xl" $color="primary" $isBold>
        Create Account
      </Typography>
      <SocialProviders />
      <Typography $size="sm">Or use your email for registrarion:</Typography>
      <SignupForm />
      <Link href="/">Back to home</Link>
    </Container>
  );
}
