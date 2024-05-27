import { StompSessionProvider } from 'react-stomp-hooks';
import Main from './components/Main';
import NoWebSocketConnexion from './components/NoWebSocketConnexion';

function App() {

  let url = null;
  if (process.env.REACT_APP_BACKEND_URL) {
    url = process.env.REACT_APP_BACKEND_URL;
    console.log('url', url)
  }

  if (url !== null) {
    return (
      <StompSessionProvider url={url}>
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