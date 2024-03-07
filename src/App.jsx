import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/nav/nav.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Services from './routes/services/services.component';
import Contact from './routes/contact/contact.component';
import NotFound from './routes/not-found/not-found.component';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
