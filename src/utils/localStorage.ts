interface IAuth {
  name?: string;
  email?: string;
  token?: string;
  role?: 'admin' | 'guest' | '';
}

export const dataRawUser = () => {
  const dataRaw: string | null = localStorage.getItem('sekawan:user') || '';
  if (!dataRaw) return null;
  if (dataRaw === 'undefined') return null;
  if (dataRaw === undefined) return null;
  const parsedData: IAuth = JSON.parse(dataRaw);

  return parsedData;
};

export const getToken = () => dataRawUser()?.token;
export const getUser = () => ({ name: dataRawUser()?.name, email: dataRawUser()?.email });
export const getRole = () => dataRawUser()?.role || '';

export const setUser = async (data: IAuth) =>
  localStorage.setItem('sekawan:user', JSON.stringify(data));

export const deleteLocalUser = () => localStorage.removeItem('sekawan:user');
