import { StompSessionProvider } from 'react-stomp-hooks';
import Main from './components/Main';
import NoWebSocketConnexion from './components/NoWebSocketConnexion';
import { useEffect, useState } from 'react';

function App() {

  const [backendURL, setBackendURL] = useState(''); 

  useEffect(() => {
      fetch('/env.js')
          .then(response => response.json())
          .then(data => setBackendURL(data.REACT_APP_BACKEND_URL));
  }, []);

  console.log("Welcome!", backendURL); 

  if (backendURL !== null) {
    return (
      <StompSessionProvider url={backendURL}>
        <Main />
      </StompSessionProvider>
    )
  } else {
    return (
      <NoWebSocketConnexion/>
    )
  }
}

export default App;