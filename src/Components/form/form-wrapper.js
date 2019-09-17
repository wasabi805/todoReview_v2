import React from 'react';
import { connect } from "react-redux";

import { updateInput ,   displayCardsAndClearForm,} from "../../Logic/actions/sample-actions";
import InputField from "../form/input-field";
import Card from "../cards/card"

const FormWrapper = (props)=>{

    const {nameInput, priceInput, descripInput , showCards,isEdit, toggleEdit, editIndex} = props;



    const handleInputChange=(e)=>{
        e.preventDefault();

        const name = e.target.name;
        const value = e.target.value;

        props.updateInput(name, value);

    };

    const addNewCard = {
        name : nameInput,
        price: priceInput,
        descrip : descripInput
    };

    const handleAddButton =(e)=>{
        e.preventDefault();
        //make the new card here from props in redux:
        // send the card , then add in showCards array (in redux)
        props.displayCardsAndClearForm(addNewCard)

    };

    return(
       <React.Fragment>
           <section id={'form-wrapper'}>
               <div className={"form"}>
                   <ul className={"input-container"}>
                       <li>Product Name : {" "}
                            <span><InputField name={"nameInput"} value={nameInput} onchange={handleInputChange}/></span>
                       </li>

                       <li>Price : {" "}
                           <span><InputField name={"priceInput"} value={priceInput} onchange={handleInputChange}/></span>
                       </li>

                       <li>Description : {" "}
                           <span><InputField name={"descripInput"} value={descripInput} onchange={handleInputChange}/></span>
                       </li>

                   </ul>

                   <div className={"hor-btn-container"}>
                       <a className={"btn"} href="" onClick={handleAddButton}>
                           Add
                       </a>
                   </div>
               </div>

               <div className={"card-wrapper"}>

                   <Card
                       showCards={showCards}
                       nameInput={addNewCard.name}
                   />
               </div>

           </section>
       </React.Fragment>
    )
};

const mapStateToProps =(state)=>({
    nameInput: state.formReducer.nameInput,
    priceInput: state.formReducer.priceInput,
    descripInput: state.formReducer.descripInput,

    showCards: state.formReducer.showCards,
    isEdit: state.formReducer.isEdit,
    editIndex: state.formReducer.editIndex

});

const mapDispatchToProps = {
    updateInput,


    displayCardsAndClearForm : displayCardsAndClearForm,

};



export default connect(mapStateToProps, mapDispatchToProps)(FormWrapper)