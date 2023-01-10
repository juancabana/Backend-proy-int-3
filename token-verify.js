import jwt from 'jsonwebtoken';

const secret = 'MyKeyCosCo';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjczMzU5NjgyfQ.6l2otY4f6WcT17qmJbLPXXx0kso_ze1xUhii5BL0_D0';
const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

const payload = verifyToken(token, secret);

console.log(payload)
