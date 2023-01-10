import bcrypt from 'bcrypt';

const verifyPassword = async () => {
  const myPassword = 'password123';
  const hash = '$2b$10$gE65z4dUHoB5MHIbi4ds3u0rpVUDFak5sqitfT.6nqMlutE05HZua';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
};
verifyPassword();
