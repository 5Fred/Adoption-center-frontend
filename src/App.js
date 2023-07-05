import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Home />
        <Login />
        <SignUp />
      </div>
    </div>
  );
};

export default App;
