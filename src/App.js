import logo from './logo.svg';
import './App.css';
import  Exercise2 from './components/container/exercise2';

function App() {
  // Obj: pasar el Example2 (Componente de tipo clase a un componente de tipo funcion (Exercise2))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Exercise2></Exercise2>
      </header>
    </div>
  );
}

export default App;
