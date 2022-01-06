import { Navigate, Route, Routes } from 'react-router-dom';
import { isLoged } from '../functions/userIsLoged';
import Docs from '../pages/Docs';
import Forum from '../pages/Forum';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound404 from '../pages/NotFound404';
import Register from '../pages/Register';
import Tools from '../pages/Tools';

const userAuthenticated = isLoged();

function Router() {
  return (
    <Routes>
      <Route exact path="tools" element={<Tools />} />
      <Route exact path="docs" element={<Docs />} />
      <Route exact path="forum" element={<Forum />} />
      <Route exact path="home" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<NotFound404 />} />
      {userAuthenticated ? (
        <>
          <Route path="login" element={<Navigate to="/home" />} />
          <Route path="register" element={<Navigate to="/home" />} />
        </>
      ) : (
        <>
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
