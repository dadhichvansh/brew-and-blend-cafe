import argon2 from "argon2";

// hash password using argon2 before storing into the database
export const hashPassword = async (password) => {
  return await argon2.hash(password);
};

// verify password during login
export const verifyPassword = async (hashedPassword, password) => {
  return await argon2.verify(hashedPassword, password);
};
