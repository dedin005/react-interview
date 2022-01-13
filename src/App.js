import TopBar from './topbar.js';
import Data from './data.js'
import Profile from './profile.js';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Container fluid>
        <body className='content'>

          <Profile />
          <Data />

        </body>
      </Container>

    </div>
  );
}

export default App;
