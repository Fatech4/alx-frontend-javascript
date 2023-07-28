export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = { data: 'Some data from the API' };
      resolve(response);
      reject();
    }, 2000);
  });
}

getResponseFromAPI()
  .then((response) => {
    console.log('API response:', response);
  })
  .catch((error) => {
    console.error('Error fetching data from API:', error);
  });
