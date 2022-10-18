import './App.css';
import Header from './components/Header';
import Card from './components/Card'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='divPrincipal'>
      <Header titulo='Galería de Imágenes con React'/>
      <hr/>
      <div className='imagenescards'>
        <Card titulo='gatito #1' src='http://placekitten.com/200/300' descripcion='mirada tierna'/>
        <Card titulo='gatito #2' src='http://placekitten.com/100/200' descripcion='cara graciosa'/>
        <Card titulo='gatito #3' src='http://placekitten.com/200/200' descripcion='temeroso' />
      </div>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
