import { ConfigProvider } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutComponent from './AboutComponent';
import Home from './Home';
import RandomComponent from './RandomComponent';

function App() {
  return (
    <ConfigProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<AboutComponent />} />
        <Route path='random' element={<RandomComponent />} />
      </Routes>
    </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
