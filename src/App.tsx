import { StompSessionProvider } from 'react-stomp-hooks';
import Main from './components/Main';

function App() {

  console.log("Welcome ! ", process.env.REACT_APP_BACKEND_URL)

  return (
    <StompSessionProvider url={'process.env.REACT_APP_BACKEND_URL'}>
      <Main />
    </StompSessionProvider>
  );
}

export default App;