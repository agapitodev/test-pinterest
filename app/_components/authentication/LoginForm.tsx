import { AuthFormContainer } from '@/app/_components/ui/auth';
import { TextField, Row, Button } from '@/app/_components/ui/base';

export default function LoginForm() {
  return (
    <AuthFormContainer>
      <TextField placeholder="Email" />
      <TextField placeholder="Password" />
      <Row>
        <Button $color="primary">Login</Button>
        <Button $variant="outlined" $color="primary" href="/signup">
          Sign Up
        </Button>
      </Row>
    </AuthFormContainer>
  );
}
