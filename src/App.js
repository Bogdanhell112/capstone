import './App.css';
import Home from './components/Home';
import Reservations from './components/Reservations';
import { ChakraProvider } from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reservations' element={<Reservations />} />
      </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;