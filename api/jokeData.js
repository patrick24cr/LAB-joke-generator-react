import axios from 'axios';

const endpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

const getJoke = async () => {
  const jokeCall = await axios.get(endpoint);

  return jokeCall.data;
};

const getJoke2 = new Promise((resolve, reject) => {
  axios.get(endpoint)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getJoke, getJoke2 };
