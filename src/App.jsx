import './App.css';
import './global.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Memoside from './components/Memoside';
import Home from './pages/Home';
import Captain from './pages/Captain';
import Sailor from './pages/Sailor';
import All from './pages/All';
import Joinside from './components/Joinside';
import Login from './pages/Login';
import Join from './pages/Join';

const App = () => {
  return (
    <BrowserRouter>
        <Memoside>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="../pages/Captain" element={<Captain />} />
              <Route path="../pages/Sailor" element={<Sailor />} />
              <Route path="../pages/All" element={<All />} />
            </Routes>
        </Memoside>
        <Joinside>
            <Routes>
              <Route path="./pages/Login" element={<Login />} />
              <Route path="./pages/Join" element={<Join />} />
            </Routes>
        </Joinside>
    </BrowserRouter>
  );
}

export default App;
