import ky from 'ky';

interface LoginInfo {
  loginDate: number;
}

export const login = async (
  user: string,
  password: string
): Promise<LoginInfo> => {
  const login = await ky
    .post('http://localhost:8080/login', { json: { user, password } })
    .json<LoginInfo>();
  return login;
};
