import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from 'routes';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {routes.map(({ path, exact, component: Component }) => (
          <Route key={path} path={path} exact={exact} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
