// Admin authorization helper
export const ADMIN_EMAIL = '0792vivek@gmail.com';

export function isAdmin(email?: string | null): boolean {
  return email === ADMIN_EMAIL;
}
