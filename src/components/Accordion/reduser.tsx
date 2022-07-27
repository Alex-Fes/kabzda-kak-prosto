


type ActionType = {
    type: string
}
type StateType = {
    collapsed: boolean
}
export const reduser = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {
                ...state,
                collapsed: !state.collapsed
            };
        default:
            throw new Error('Bad action Type')// если будет ошибка в type
    }
}