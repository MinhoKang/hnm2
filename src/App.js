import { Container } from 'react-bootstrap';
import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import { useState } from 'react';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <>
      <Container>
        <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      </Container>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login authenticate={authenticate} setAuthenticate={setAuthenticate} />}
        />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </>
  );
}

export default App;
