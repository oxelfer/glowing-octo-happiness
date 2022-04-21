import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Collections } from './pages/collections';
import { CollectionCatalogue } from './pages/collection-catalogue';
import { ObjectDetail } from './pages/object-detail';
import { Exhibits } from './pages/exhibits';
import { About } from './pages/about';
import { Contacts } from './pages/contacts';
import { Visit } from './pages/visit';
import { NotFound } from './pages/not-found';

import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';

function App() {
  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>

      <main id='main-content' className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/catalogue/:search' element={<CollectionCatalogue />} />
          <Route path="/object/:id" element={<ObjectDetail />} />
          <Route path='/exhibits' element={<Exhibits />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/visit' element={<Visit />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </>
    
  );
}

export default App;
