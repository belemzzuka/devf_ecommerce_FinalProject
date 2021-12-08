import './App.css';
import Routes from './routes';
import {UserProvider} from './context/userContext';

function App() {
  return (
    <>
    <UserProvider>
      <Routes />
    </UserProvider>
    </>
  );
}

export default App;
