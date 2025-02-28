import logo from './logo.svg';
import './App.css';
import { ListCard } from './components/list-card/list-card';
import { Header } from './components/header/header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Details } from './components/details/details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path="*" element={<ListCard />} />
          <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
