import { StompSessionProvider } from 'react-stomp-hooks';
import Main from './components/Main';
import { useEffect, useState } from 'react';

function App() {
  
  document.title = "Plants !";

  const url ='http://localhost:8080/ws-endpoint';

  return (
      <StompSessionProvider url={url}>
        <Main />
      </StompSessionProvider>
  )
}

export default App;