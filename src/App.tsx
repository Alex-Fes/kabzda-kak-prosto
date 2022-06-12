import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Raiting from "./components/Raiting/Raiting";
import PageTitle from "./components/PageTitle/PageTitle";


function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <h4>Article 1</h4>
            <Raiting value={1}/>
            <Accordion titleValue={'Menu'} collapsed={true} />
            <Accordion titleValue={'Users'} collapsed={false} />
            <h4> Article 2</h4>
            <Raiting value={0}/>
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Raiting value={4}/>
            <Raiting value={5}/>
        </div>
    );
}

export default App;
