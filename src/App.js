import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

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
