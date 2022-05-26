import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//styles
import './App.css';

//pages and components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Projects from './pages/projects/Projects';
import Navbar from './comps/Navbar';
import Sidebar from './comps/Sidebar';
import OnlineUsers from './comps/OnlineUsers';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="/create"
                element={user ? <Create /> : <Navigate to="/login" />}
              />

              <Route
                path="/projects/:id"
                element={user ? <Projects /> : <Navigate to="/login" />}
              />

              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              />

              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <Signup />}
              />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
