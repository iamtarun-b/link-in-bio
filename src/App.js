import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/link-in-bio" element={<Home />}> </Route>
        <Route path="/about" element={<About />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
