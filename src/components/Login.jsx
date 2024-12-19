import { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from './base/Container';
import Input from './base/Input';
import Text from './base/Text';
import Label from './base/Label';
import Button from './base/Button';

const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };
  return (
    <Container>
      <Text variant="h1">Login</Text>
      <Text>
        <Label htmlFor="email" value="Email" />
        <Input
          type="email"
          id="email"
          placeholder="Enter email or username"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Text>
      <Text>
        <Label htmlFor="password" value="Password" />
        <Input
          type="password"
          id="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Text>
      <Text className="flex justify-between">
        <Button size="lg" onClick={handleSubmit} label="Submit" />
        <Text variant="h3">
          Don't have an account? <Link to="/register">Register</Link>
        </Text>
      </Text>
    </Container>
  );
};

export default Login;
