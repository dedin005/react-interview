import './App.css';
import TopBar from './topbar.js';
import Data from './data.js'
import Profile from './profile.js';

function App() {
  return (
    <div className="App">
      <div className="header">
        <TopBar />
      </div>
      
      <body className='content'>
        <Profile />
        <Data />
      </body>
    </div>
  );
}

export default App;
