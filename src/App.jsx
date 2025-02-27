import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import RandomComponent from './RandomComponent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='random' element={<RandomComponent />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
