import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Keyboard } from './components/keyboard';

function App() {
    return (
        <div className="container">
            {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
            <span className="message">Calling...</span>
            <main className="phone">
                <Keyboard></Keyboard>
                <div className="actions">
                    <span className="number">667359961</span>
                    {/*   <!-- El botón de llamar debe tener la clase "activo" cuando -->
          <!-- el número de teléfono tiene 9 cifras --> */}
                    <a href="#" className="call">
                        Call
                    </a>
                    {/* <!-- Sólo se tiene que ver un botón u otro --> */}
                    <a href="#" className="hang active">
                        Hang
                    </a>
                </div>
            </main>
        </div>
    );
}

export default App;
