import bcrypt from 'bcrypt';

const verifyPassword = async () => {
  const myPassword = 'admin123.#$%';
  const hash = '$2b$10$THf8zcfhTCfhnBupojLfKuTAnK43aMY2MD3z5qGr/Zts5S/GS392G';
  const isMatch = await bcrypt.compare(myPassword, hash)
  console.log(isMatch);
}
verifyPassword()
