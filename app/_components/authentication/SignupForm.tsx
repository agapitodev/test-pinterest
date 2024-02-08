import { AuthFormContainer } from '@/app/_components/ui/auth';
import {
  TextField,
  Row,
  Button,
  Checkbox,
  Link,
} from '@/app/_components/ui/base';

export default function SignupForm() {
  return (
    <AuthFormContainer>
      <TextField placeholder="Name" />
      <TextField placeholder="Email" />
      <TextField placeholder="Password" />
      <Checkbox id="terms">
        I agree to the{' '}
        <Link
          href="https://policy.pinterest.com/en/terms-of-service"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms
        </Link>{' '}
        and{' '}
        <Link
          href="https://policy.pinterest.com/en/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </Link>
      </Checkbox>
      <Row>
        <Button $color="primary">Sign Up</Button>
        <Button $variant="outlined" $color="primary" href="/login">
          Login
        </Button>
      </Row>
    </AuthFormContainer>
  );
}
