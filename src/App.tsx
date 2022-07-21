import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import Raiting, {RaitingValueType} from "./components/Raiting/Raiting";
import {Accordion} from './components/Accordion/Accordion';
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";


function App() {

    let [raitingValue, setRaitingValue] = useState<RaitingValueType>(0)
    let [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false)
    let [changeOnOff, setChangeOnOff] = useState(true)

    return (
        <div>
            <Raiting value={raitingValue}
                     onClick={setRaitingValue}/>
            <Accordion titleValue={'Menu'}
                       collapsed={collapsedAccordion}
                       onClick={() => {setCollapsedAccordion(!collapsedAccordion)}}/>
            <UncontrolledOnOff onChange={setChangeOnOff}/> {changeOnOff.toString()}
            <OnOff startValue={changeOnOff}
                   onClick={setChangeOnOff}/>


            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledAccordion titleValue={'Users'}/>*/}
            {/*<UncotrolledRaiting/>*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<h4>Article 1</h4>*/}


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
