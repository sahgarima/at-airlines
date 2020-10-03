import JSON from '../data.json'

const initialstate = {
    allList: JSON,
    display: false,
    totalPrice: 0,
    idRound: "false",
    origin: "",
    originLabel: "",
    destLabel: "",
    dest: "",
    startDate: new Date(),
    endDate: new Date(),
    userName: "",


};


const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'GET_LIST':
            return {
                ...state
            };
        case 'START_SEARCH':
            return {
                ...state,
                display: action.payload
            };
        case 'CHANGE_TRIP':
            return {
                ...state,
                idRound: action.payload
            };
        case 'CHANGE_ORIGIN':
            return {
                ...state,
                [action.key]: action.payload
            };
        default:
            return state;
    }

}
export default reducer;  