export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    const processingFailed = true;
    if (processingFailed) {
      reject(new Error(`${fileName} cannot be processed`));
    } else {
      // Simulate successful processing
      resolve(`${fileName} has been successfully processed`);
    }
  });
}
