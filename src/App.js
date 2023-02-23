import './App.css';
import Product from './Product';
import { Provider } from 'react-redux';
import  Store  from './redux/Store';
function App() {
  
  return (
    <div className='container'>
        <Provider store={Store}>
            <Product />
        </Provider>
    </div>
  );
}


export default App;
