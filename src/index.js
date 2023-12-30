import {React} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductListingPage from './Cart';
import reportWebVitals from './reportWebVitals';
import { Provider} from 'react-redux';
import {store} from './stores/addToCartStore';
import { useSelector, useDispatch } from 'react-redux'
import {addToCart } from './states/addToCartSlice'
import View from './View';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Provider store={store}>

    <View />
  </Provider>
);


reportWebVitals();
