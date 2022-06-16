import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Raiting from "./components/Raiting/Raiting";
import PageTitle from "./components/PageTitle/PageTitle";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/Accordion";
import UncotrolledRaiting from "./components/Raiting/UncontrolledRaiting";


function App() {
    return (
        <div>

            <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledAccordion titleValue={'Users'} />
            <UncotrolledRaiting />
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<h4>Article 1</h4>*/}
            {/*<Raiting value={1}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true} />*/}
            {/*<Accordion titleValue={'Users'} collapsed={false} />*/}
            {/*<h4> Article 2</h4>*/}
            {/*<Raiting value={0}/>*/}
            {/*<Raiting value={1}/>*/}
            {/*<Raiting value={2}/>*/}
            {/*<Raiting value={3}/>*/}
            {/*<Raiting value={4}/>*/}
            {/*<Raiting value={5}/>*/}
        </div>
    );
}

export default App;
