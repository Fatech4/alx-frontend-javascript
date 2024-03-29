import { uploadPhoto, createUser } from './utils.js';
async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    
    return {
      photo: photo.body,
      user: user,
    };
  } catch (error) {
    // Handle errors here if necessary
    console.error("Error occurred:", error);
    throw error; // Re-throw the error for further handling
  }
}
