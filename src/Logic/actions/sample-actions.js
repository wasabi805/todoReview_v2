import { TIM_SAMPLE_ACTION } from "../_types/types";

export const timSampleAction = () => {
  return {
    type: TIM_SAMPLE_ACTION,
    payload: "This my stuff : Gets added to ...state"
  };
};

export const updateInput = (name, value) => {

  return {
    type: 'UPDATE_INPUT',

    payload: {
      name: name,
      value: value
    }
  };
};

export const submitEdit = (editedCard , idx)=>{
    return{
      type : 'SUBMIT_EDIT',
      payload :{
        editedCard :  editedCard,
        idx : idx
      }
    }
};



const addNewCardToShowCardArray =(newCard)=>{
  return{
    type : "ADD_CARD_TO_SHOW_CARDS_ARRAY",
    payload : {
      newCard : newCard
    }
  }
};


const clearFields = ()=>{
  return{
    type : "CLEAR_FIELDS",
    payload : ''
  }

};

//Main Async function call make the card for array and clear form
export const displayCardsAndClearForm = newCard => dispatch=>  {

  dispatch(addNewCardToShowCardArray(newCard));
  dispatch(clearFields())
};



