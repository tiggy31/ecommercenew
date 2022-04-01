import './App.scss';
import {Switch,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import NotFound from './Components/shared/not-found';
import Shop from './pages/shop'
import singleProduct  from './Components/SingleProduct/singleProduct';
import CartPage from './pages/cart-page/cart-page'
import Checkout from './Components/checkout/checkout'
import Success from './Components/checkout/success'
import Canceled from './Components/checkout/cancelled'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route path = '/item/:id' component = {singleProduct}/>
        <Route path = '/shop' component = {Shop}/>
        <Route path = '/cart' component = {CartPage} />
        <Route path = '/checkout' component = {Checkout}/>
        <Route path = '/success' component = {Success} />
        <Route path = '/canceled'component = {Canceled} />
        <Route path = '*' component = {NotFound}/>

      </Switch>
    </div>
  );
}

export default App;
