import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
}


export const Example1 = () => {
    const [fake, setFake] = useState<number>(1);
    const [counter, setCounter] = useState<number>(1);
    console.log('Example1 was called')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])


    return <>
        Hello, {counter} - {fake}
        <button onClick={() => {
            setFake(fake + 1)
        }}>fake +
        </button>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>counter +
        </button>
    </>
};

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState<number>(1);
    const [counter, setCounter] = useState<number>(1);
    console.log('SetTimeoutExample was called')

    // useEffect(()=> {
    //     setTimeout(()=>{
    //         console.log('setTimeout was called')
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}

    </>
};

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState<number>(1);
    console.log('Component rendered')
    useEffect(() => {
        console.log('Effect occurred')
        return () => {
            console.log('RESET EFFECT')
        }
    }, [])
    const increase = () => {
        setCounter(counter + 1)
    }
    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>

    </>
};

export const KeysTrackerExample = () => {
    const [text, setText] = useState('');
    console.log('Component rendered with ' + text)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.document.addEventListener('keypress',handler )
        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
};



















