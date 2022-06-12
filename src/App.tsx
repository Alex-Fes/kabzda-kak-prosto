import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Raiting/>
            <Accordion/>
        </div>
    );
}

function Raiting() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return (
        <div>
            <div>Star</div>
        </div>
    )
}

function AppTitle() {
    return (
        <>This is APP component</>
    )
}

function Accordion() {
    return (<div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    return (
        <div><h3>Меню</h3></div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
