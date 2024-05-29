import { StompSessionProvider } from 'react-stomp-hooks';
import Main from './components/Main';

function App() {

  const url = 'https://10.0.0.16:8080/ws-endpoint'

  console.log("connecting to", url)

    return (
      <StompSessionProvider url={url}>
        <Main />
      </StompSessionProvider>
    )
  }

export default App;