'use client';

import { useState } from 'react';
import { AuthFormContainer } from '@/app/_components/ui/auth';
import { authenticate } from '@/utils/Auth';
import { TextField, Row, Button, Typography } from '@/app/_components/ui/base';
import { firebaseService } from '@/services';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async () => {
    if (!email || !password) return alert('Complete all required field');
    setError('');
    try {
      const user = await firebaseService.SigninWithEmail(email, password);
      authenticate(JSON.stringify(user));
      router.push('/dashboard');
    } catch (error) {
      setError('Ocurrió un error.');
    }
  };

  return (
    <AuthFormContainer>
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
      {error && (
        <Typography $color="primary" $size="xs">
          {error}
        </Typography>
      )}
      <Row>
        <Button $color="primary" onClick={login}>
          Login
        </Button>
        <Button $variant="outlined" $color="primary" href="/signup">
          Sign Up
        </Button>
      </Row>
    </AuthFormContainer>
  );
}
