
const initialState = {
    heroHeader: "WELCOME",

    productNameInput : "",
    productPriceInput : "",
    productDescriptionInput : "",

    showCards:[]

};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case 'UPDATE_INPUT':
            return{
                ...state,
               [payload.name] : payload.value
            };

        case 'GET_CARD_DATA':
            return{
                ...state,
                showCards : [...state.showCards , payload]
            };

        case 'CLEAR_FIELDS' :
            return{
                ...state,
                productNameInput : "",
                productPriceInput : "",
                productDescriptionInput : "",
            };

        default:
            return state;
    }
}