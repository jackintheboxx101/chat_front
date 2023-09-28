

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import User from './pages/user/User';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/user/*" element={<User />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
