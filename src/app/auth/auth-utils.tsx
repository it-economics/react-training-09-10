import sha256 from 'crypto-js/sha256';

const API_URL = 'https://qdw00908-9000.euw.devtunnels.ms';

interface LoginResponse {
  token: string;
}

export const login = (email: string, password: string) =>
  fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { authorization: generateAuthHeader(email, password) },
  })
    .then((response) => response.json() as unknown as LoginResponse)
    .then((response) => response.token)
    .catch((err) => console.error(err));

const generateAuthHeader = (email: string, password: string) => {
  return `Basic ${email}:${sha256(password)}`;
};

export const register = (email: string, password: string) =>
  fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { authorization: generateAuthHeader(email, password) },
  }).catch((err) => console.error(err));
