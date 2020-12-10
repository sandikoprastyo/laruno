import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbars from './components/Navbars/Navbars';
import Forms from './components/Form/Forms';
import Videos from './components/Video/Video';

function App() {
  return (
    <div className='App'>
      <Navbars />
      <Header />
      <Videos />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
