import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { Page404 } from './components/Page404';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<AboutUs />}/>
          <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
