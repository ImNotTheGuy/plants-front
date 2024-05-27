import { StompSessionProvider } from 'react-stomp-hooks';
import Main from './components/Main';

function App() {

  return (
    <StompSessionProvider url={'http://localhost:8080/ws-endpoint/'}>
      <Main />
    </StompSessionProvider>
  );
}

export default App;