import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import MainCatalogo from './components/Catalogo/MainCatalogo';
import "./App.css";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App" id='top'>
      <Header titulo={"REFUGIO MASCOTAS"}/>
      <Inicio/>
      <MainCatalogo/>
      <Footer/>
    </div>
  );
}

export default App;

