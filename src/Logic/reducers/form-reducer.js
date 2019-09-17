const initialState = {
    form: "THIS FROM FORM REDUCER",

    nameInput : "",
    priceInput : "",
    descripInput : "",

    showCards:[],



    isEdit : false,
    editIndex : "",



};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case 'UPDATE_INPUT':
            return{
                ...state,
                [payload.name] : payload.value,
            };

        case 'ADD_CARD_TO_SHOW_CARDS_ARRAY':
            const {newCard} = payload;
            return{
                ...state,
                showCards: [...state.showCards , newCard ]
            };

        case 'CLEAR_FIELDS' :
            return{
                ...state,
                nameInput : "",
                priceInput : "",
                descripInput : "",
            };

        case 'GET_INITIAL_EDIT_FIELDS' :
            return{
                ...state,

                ...state.showCards
            };


        case 'SUBMIT_EDIT':
            console.log(payload, 'I m at the reducer');
            const{ editedCard, idx} =payload

            const updatedDeck = state.showCards.slice();

            updatedDeck.splice(idx, 1 , editedCard)



            return{
                ...state, showCards : updatedDeck
            };


        default:
            return state;
    }
}