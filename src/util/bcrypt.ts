import * as bcrytp from 'bcrypt';

const SALT = 10;

export async function encodePassword(password: string) {
  return bcrytp.hash(password, SALT);
}

export async function comparePassword(password: string, hash: string){
  return bcrytp.compare(password, hash);
}
