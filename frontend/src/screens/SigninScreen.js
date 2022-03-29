import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';

function SigninScreen() {
  //To get the redirect value from URL
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault(); // To prevent page refresh when user click the sign in button

    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      console.log(`Object Data`, data);
    } catch (err) {}
  };

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>

        <div className="mb-3">
          New Customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create Your Account</Link>
        </div>
      </Form>
    </Container>
  );
}

export default SigninScreen;
