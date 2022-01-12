import './App.css';
import TopBar from './topbar.js';
import Data from './data.js'
import Profile from './profile.js';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <TopBar />
      </Container>
      
      <body className='content'>
        <Container>
          <Profile />
          <Data />
        </Container>
      </body>
    </div>
  );
}

export default App;
