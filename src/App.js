import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import Booking from './components/Booking/booking';

function App() {
  return (
    <div className="App">
         <Header />
         <Navbar />
         <Hero />
         <Booking />
    </div>
  );
}

export default App;
