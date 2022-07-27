import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import Raiting, {RaitingValueType} from "./components/Raiting/Raiting";
import {Accordion} from './components/Accordion/Accordion';
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";


function App() {

    let [raitingValue, setRaitingValue] = useState<RaitingValueType>(0)
    let [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false)
    let [changeOnOff, setChangeOnOff] = useState(true)
    let [selectValue, setSelectValue] = useState<string | undefined>('0');
    let items = [
        {title: 'None', value: '0'},
        {title: 'Alex', value: '1'},
        {title: 'Vika', value: '2'},
        {title: 'Yana', value: '3'},
        {title: 'Natasha', value: '4'}];
    const onChange = (value: any) => {
        alert(value);
    };
    const onSelect = (value: any) => {
        let chooseTitle = items.find(i => i.value === value);
        setSelectValue(chooseTitle? chooseTitle.value : chooseTitle);
    };

    return (
        <div>
            <Select value={selectValue} onClick={onSelect} items={items}/>
            {/*<Raiting value={raitingValue}*/}
            {/*         onClick={setRaitingValue}/>*/}
            {/*<Accordion titleValue={'Menu'}*/}
            {/*           collapsed={collapsedAccordion}*/}
            {/*           onClick={() => {*/}
            {/*               setCollapsedAccordion(!collapsedAccordion)*/}
            {/*           }}*/}
            {/*           items={items}*/}
            {/*           onChange={onChange}/>*/}
            {/*<UncontrolledOnOff onChange={setChangeOnOff}/> {changeOnOff.toString()}*/}
            {/*<OnOff startValue={changeOnOff}*/}
            {/*       onClick={setChangeOnOff}/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
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
