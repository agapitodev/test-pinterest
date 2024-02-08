'use client';

import { useState } from 'react';
import { AuthFormContainer } from '@/app/_components/ui/auth';
import { authenticate } from '@/utils/Auth';
import {
  TextField,
  Row,
  Button,
  Checkbox,
  Typography,
  Link,
} from '@/app/_components/ui/base';
import { firebaseService } from '@/services';
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState('');

  const createUser = async () => {
    if (!email || !password || !terms)
      return alert('Complete all required field');
    setError('');
    try {
      const user = await firebaseService.SignupWithEmail(email, password);
      authenticate(JSON.stringify(user));
      router.push('/dashboard');
    } catch (error) {
      setError('Ocurrió un error.');
    }
  };

  return (
    <AuthFormContainer>
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        type="text"
        $color="auxiliar"
      />
      <TextField
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        type="email"
        $color="auxiliar"
      />
      <TextField
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        type="password"
        $color="auxiliar"
      />
      <Checkbox id="terms" value={terms} setValue={setTerms}>
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
      {error && (
        <Typography $color="primary" $size="xs">
          {error}
        </Typography>
      )}
      <Row>
        <Button $color="primary" onClick={createUser}>
          Sign Up
        </Button>
        <Button $variant="outlined" $color="primary" href="/login">
          Login
        </Button>
      </Row>
    </AuthFormContainer>
  );
}
