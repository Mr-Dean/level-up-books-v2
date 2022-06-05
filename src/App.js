import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import OurMissionPage from './routes/our-mission/our-mission.component';
import Shop from './routes/shop/shop.component';



function App() {
  return (
    <div>
    <Navigation />
    <Routes>
      <Route path='/' element={<Navigation />} />
      <Route index element={<Home />} />
      <Route path='our-mission' element={<OurMissionPage />} />
      <Route path='shop/*' element={<Shop />} />
      <Route path='auth' element={<Authentication/>} />
      <Route path='checkout' element={<Checkout />} />
    </Routes>
    </div>
    
  );
}

export default App;
