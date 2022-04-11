import './App.css';

import { Home } from './pages/home';
import { Collections } from './pages/collections';
import { Exhibits } from './pages/exhibits';
import { About } from './pages/about';
import { Contacts } from './pages/contacts';
import { Visit } from './pages/visit';
import { NotFound } from './pages/not-found';

import Header from './components/header';

function App() {
  return (
    <>
      <Header />

      <Home />
      <Collections />
      <Exhibits />
      <About />
      <Contacts />
      <Visit />
      <NotFound />

      
    </>
    
  );
}

export default App;
