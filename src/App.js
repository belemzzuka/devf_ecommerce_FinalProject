import './App.css';
import Routes from './routes';
import {UserProvider} from './context/userContext';
import { ProductProvider } from './context/productContext';

function App() {
  return (
    <>
    <UserProvider>
      <ProductProvider>
        <Routes />
      </ProductProvider>
    </UserProvider>
    </>
  );
}

export default App;
