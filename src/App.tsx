import { StompSessionProvider } from 'react-stomp-hooks';
import Main from './components/Main';
import NoWebSocketConnexion from './components/NoWebSocketConnexion';

function App() {

  let url = null;
  if (process.env.REACT_APP_BACKEND_URL) {
    url = process.env.REACT_APP_BACKEND_URL;
  }
    return (
      <StompSessionProvider url={'https://plants-back-e7ciaosr2q-ey.a.run.app:8080/ws-endpoint'}>
        <Main />
      </StompSessionProvider>
    )
  }

export default App;