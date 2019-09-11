import { TIM_SAMPLE_ACTION } from "../_types/types";

export const timSampleAction = () => {
  return {
    type: TIM_SAMPLE_ACTION,
    payload: "This my stuff : Gets added to ...state"
  };
};

export const updateInput = (e) => {
  e.preventDefault();

  return {
    type: 'UPDATE_INPUT',

    payload: {
      name: e.target.name,
      value: e.target.value
    }
  };
};


const makeCard =(cardData)=>{
  return{
    type : "GET_CARD_DATA",
    payload : cardData
  }
};

const clearFields = ()=>{
  console.log('im ready to clear');

  return{
    type : "CLEAR_FIELDS",
    payload : ''
  }

};

//Main Async function call make the card for array and clear form
export const getCardDataAndClearForm = cardData => dispatch=>  {
  dispatch(makeCard(cardData));
  dispatch(clearFields())
};