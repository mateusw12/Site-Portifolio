import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Feed } from './components';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/' element={<Feed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
