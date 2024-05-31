export const checkMenuRoles = (role: string | undefined) => {
  if (role === 'admin') return 'admin';
  if (role === 'guest') return 'guest';

  return '';
};
