import { useState } from 'react';
import { getJoke } from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState({});
  const [deliveringSetup, setDeliveringSetup] = useState(true);

  const DisplayJoke = () => {
    if (joke.setup) {
      if (deliveringSetup) {
        return <p>{joke.setup}</p>;
      }
      return <p>{joke.delivery}</p>;
    }
    return <p />;
  };

  const DisplayButton = () => {
    if (!joke.setup) {
      return <button type="button" onClick={() => getJoke().then((jokeReceived) => setJoke(jokeReceived))}>Tell Me A Joke</button>;
    }
    if (joke.setup && deliveringSetup) {
      return <button type="button" onClick={() => setDeliveringSetup(false)}>Get Punchline</button>;
    }
    if (joke.setup && !deliveringSetup) {
      return (
        <button
          type="button"
          onClick={() => {
            getJoke().then((jokeReceived) => {
              setJoke(jokeReceived);
              setDeliveringSetup(true);
            });
          }}
        >Get Another Joke
        </button>
      );
    }
    return null;
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <DisplayJoke />
      <DisplayButton />
    </div>
  );
}

export default Home;
