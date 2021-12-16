import './App.css';
import Routes from './routes';
import {UserProvider} from './context/userContext';
import { ProductProvider } from './context/productContext';
import { CarritoProvider } from './context/shoppingContext';

function App() {
  return (
    <>
    <UserProvider>
      <ProductProvider>
      <CarritoProvider>
        <Routes />
      </CarritoProvider>
      </ProductProvider>
    </UserProvider>
    </>
  );
}

export default App;
