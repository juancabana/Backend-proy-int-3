import jwt from 'jsonwebtoken';

const secret = 'MyKeyCosCo'
const payload = {
  sub: 1,
  role: 'user',

}

const signToken = (payload, secret) => {
  return jwt.sign(payload, secret)   ;
}

const token = signToken(payload, secret);
console.log(token)
