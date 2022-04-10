import logo from './logo.svg';
import './Tienda.css';

function Tienda() {
    return (
        <div id="contenedor">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>¡Hola usuari@! </h1>
            <h2>Bienvenido a React</h2>
            <h2>PRONTO UNA TIENDA POR AQUI</h2>
        </div>
    );
}

export default Tienda;
