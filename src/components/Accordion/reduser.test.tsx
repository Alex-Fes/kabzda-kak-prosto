import {reduser, StateType} from "./reduser";

test('reduser should change value to reverse value', () => {
    const state: StateType = {
        collapsed: false
    }
    const newState = reduser(state, {type: 'TOGGLE-COLLAPSED'})
    expect(newState.collapsed).toBe(true)
})

test('reduser should change value to reverse value 2', () => {
    const state: StateType = {
        collapsed: true
    }
    const newState = reduser(state, {type: 'TOGGLE-COLLAPSED'})
    expect(newState.collapsed).toBe(false)
})

test('reduser should comeback error', () => {
    const state: StateType = {
        collapsed: true
    }
   expect(()=>{reduser(state, {type: 'FAKE-ACTION'})}).toThrowError();
    //при передаче неправильного action вернется ошибка
})