import './App.css';
import Navigationbar from './components/navigationbar/Navigationbar.js';
import Header from './components/header/Header.js';
import Home from './routes/home/Home.js';
import Catalogue from './routes/catalogue/Catalogue.js';
import History from './routes/history/History.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalaryCard from './routes/salarycard/SalaryCard.js';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/catalogue' element={<Catalogue/>} />
          <Route path='/history' element={<History/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/salarycard' element={<SalaryCard/>} />
        </Routes>
        <Navigationbar />
      </Router>
    </div>
  );
}

export default App;
