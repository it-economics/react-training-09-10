import sha256 from 'crypto-js/sha256';

const API_URL = 'https://qdw00908-9000.euw.devtunnels.ms';

const login = (email: string, password: string) => Promise.resolve();

const generateAuthHeader = (email: string, password: string) => {
  return `Basic ${email}:${sha256(password)}`;
};

export const register = (email: string, password: string) =>
  fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { authorization: generateAuthHeader(email, password) },
  }).catch((err) => console.error(err));
