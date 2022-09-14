import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Profile from './pages/profile';
import Home from './pages/home';
import LoggedInRoutes from './routes/LoggedInRoutes';
import NotLoggedInRoutes from './routes/NotLoggedInRoutes';
import CreatePostPopup from './components/createPostPopup';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Demo from './Demo';
function App() {
  const [visible, setVisible] = useState(false);
  const { user, error } = useSelector((state) => ({ ...state }));
  return (
    <div>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home setVisible={setVisible} />} exact />
          {/* <Route path="/activate/:token" element={<Activate />} exact /> */}
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route path="/demo" element={<Demo />} exact />
      </Routes>
      {visible && <CreatePostPopup user={user} setVisible={setVisible} />}
    </div>
  );
}

export default App;
