import './App.css';
import { Route, Routes } from 'react-router-dom'
import SetCookie from './SetCookie';
import GetCookie from './GetCookie';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route exact path="/" element={<SetCookie />} />
        <Route exact path="/" element={<GetCookie />} />
      </Routes>
    </div>
  );
}

export default App;
