import signUpUser from './4-user-promise';
import { uploadPhoto } from './utils';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) =>
    values.map((result) => ({
      status: result.status,
      value:
        result.status === 'fulfilled' ? result.value : result.reason.message,
    }))
  );
}
