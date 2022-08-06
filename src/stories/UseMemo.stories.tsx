import React, {useMemo, useState} from 'react';

export default {
    title: 'UseMemo'
}


export const DifficultCountExample = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);
    let resultA = 1;
    let resultB = 1;
    resultA = useMemo(()=>{
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000){
                fake++;
                let fakeValue = Math.random()
            } //while для нагрузки процессора
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a])
    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        {/*Number как и '+' приводит строку к числу*/}
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>

    </>
}

// export const HelpsForReactMemoExample = () => {
//     return <>
//
//
//     </>
// }

    const UsersHide = (props: { users: Array<string> }) => {
        console.log('Users Hide')
        return <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    };
    const Users = React.memo(UsersHide);

    export const HelpsToReactMemo = () => {
        console.log('HelpsToReactMemo')
        const [counter, setCounter] = useState(0);
        const [users, setUsers] = useState(['Alex', 'Yana', 'Sasha', 'Dimon']);

        const filterArray = useMemo(()=>{
           return  users.filter(u=> u.toLowerCase().indexOf('a') > -1);
        },[users])

        const addUser = () => {
            const newUser = [...users, 'Sveta' + new Date().getTime()];
            setUsers(newUser);
        }
        return <>
            <button onClick={()=>{setCounter(counter +1)}}>Add</button>
            <button onClick={()=>{addUser()}}>Add User</button>
            {counter}
            <Users users={filterArray}/>
        </>
    };
