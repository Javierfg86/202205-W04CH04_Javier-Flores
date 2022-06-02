import React from 'react';

import './App.css';
import { Keyboard } from './components/keyboard';

import { Actions } from './components/actions';
import { Info } from './components/info';

function App() {
    return (
        <div className="container">
            {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
            <Info></Info>
            <main className="phone">
                <Keyboard></Keyboard>
                <Actions></Actions>
            </main>
        </div>
    );
}

export default App;
