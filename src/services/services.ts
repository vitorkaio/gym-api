import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export const cryptPassword = async (pass: string): Promise<string> => {
  const hash = await bcrypt.hash(pass, SALT_ROUNDS)
  return hash
}

export const compare = async (pass1: string, pass2: string): Promise<boolean> => {
  return bcrypt.compare(pass1, pass2)
}
