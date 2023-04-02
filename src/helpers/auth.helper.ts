import 'dotenv/config';
export type PayloadToken = {
  id: string;
  name: string;
};

export const jwtConstants = {
  secret: process.env.JWT_SECRET,
  expiredToken: process.env.JWT_EXPIRE_TOKEN,
  expiredRefreshToken: process.env.JWT_EXPIRE_REFRESH_TOKEN,
};
