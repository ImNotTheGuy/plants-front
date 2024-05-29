import { StompSessionProvider } from 'react-stomp-hooks';
import Main from './components/Main';
import { useState } from 'react';

function App() {

  const [url, setUrl] = useState('https://10.0.0.16:8080/ws-endpoint');
  const [newUrl, setNewUrl] = useState(url);

  const handleChangeUrl = () => {
    setUrl(newUrl);
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-green-100 to-green-200 p-8'>
      <input
        className='bg-white rounded-lg shadow-lg p-2 w-1/3 mx-4'
        type='text'
        value={newUrl}
        onChange={(e) => setNewUrl(e.target.value)}
        placeholder="Enter new URL"
      />
      <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-1/3' onClick={handleChangeUrl}>Change URL</button>
      <StompSessionProvider url={url}>
        <Main />
      </StompSessionProvider>
    </div>
  )
}

export default App;