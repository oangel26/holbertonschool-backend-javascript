export default function handleResponseFromAPI(promise) {
  const myPromise = new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'success' });
    } else {
      reject(new Error());
    }
  });

  myPromise.then(() => {
    console.log('Got a response from the API');
  }).catch((message) => {
    console.log(message);
  });
}
