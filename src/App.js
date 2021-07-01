import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <h1>GIT</h1>
            <section>
                <h2>Select</h2>
                <select name="" id="" className={'select'}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </section>
            <section>
                <h2>Input</h2>
                <input type="text" className={'input'}/>
            </section>
        </div>

    );
}

export default App;
