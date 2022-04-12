import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Collections } from './pages/collections';
import { ObjectDetail } from './pages/object-detail';
import { Exhibits } from './pages/exhibits';
import { About } from './pages/about';
import { Contacts } from './pages/contacts';
import { Visit } from './pages/visit';
import { NotFound } from './pages/not-found';

import Header from './components/header';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collections' element={<Collections />} />
          <Route path="/collections/:id" element={<ObjectDetail />} />
          <Route path='/exhibits' element={<Exhibits />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/visit' element={<Visit />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </main>
      
      <footer>
        <p>&copy; Footer placeholder</p>
      </footer>
    </>
    
  );
}

export default App;
