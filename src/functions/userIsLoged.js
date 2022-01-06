import { getAuth } from 'firebase/auth';

export function isLoged() {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);
  return user;
}
