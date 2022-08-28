import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
}


export const Example1 = () => {
    const [fake, setFake] = useState<number>(1);
    const [counter, setCounter] = useState<number>(1);
    console.log('Example1 was called')

    useEffect(()=>{
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(()=>{
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    } , [])

    useEffect(()=>{
        console.log('useEffect first render and every counter change' )
        document.title = counter.toString()
    } , [counter])


    return <>
      Hello, {counter} - {fake}
        <button onClick={() => {setFake(fake + 1)}}>fake +</button>
        <button onClick={() => {setCounter(counter + 1)}}>counter +</button>
    </>
};




