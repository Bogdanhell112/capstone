import './App.css';
import Home from './components/Home';
import Reservations from './components/Reservations';
import { ChakraProvider } from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom'
import ConfirmedBooking from './components/ConfirmedBooking';
import UnderConstruction from './utilities/UnderConstruction';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reservations' element={<Reservations />} />
      <Route path='/booking-confirmation' element={<ConfirmedBooking />} />
      <Route path='/menu' element={<UnderConstruction />} />
      <Route path='/order-online' element={<UnderConstruction />} />
      <Route path='/login' element={<UnderConstruction />} />
      </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;