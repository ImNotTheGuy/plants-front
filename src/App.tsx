import { StompSessionProvider } from 'react-stomp-hooks';
import Main from './components/Main';

function App() {

    return (
      <StompSessionProvider url={'http://10.0.0.16:8080/ws-endpoint'}>
        <Main />
      </StompSessionProvider>
    )
  }

export default App;