import logo from './logo.svg';
import './App.css';
import PostInfo from './components/PostInfo';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './components/HomeComponent';
import PostForm from './components/CreatePost';
import Login from './components/LoginComponent';
import { Logout } from './components/Logout';

function App() {
  // console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<PostForm/>} />
          <Route path="/post/:id" element={<PostInfo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;