import React , {useState, useEffect } from 'react';
import { connect } from "react-redux";
import {submitEdit } from "../../Logic/actions/sample-actions";
import InputField from "../form/input-field"

const Card = (props)=>{

    const {showCards, nameInput} = props;

    const [editIdx , setEditIdx] = useState("");
    const [isEditCard , setIsEditCard] = useState(false);

    useEffect(()=>{
        console.log(nameInput)
    });


    const [editField, setEditField] = useState({
        name : "Stuff"
    });


    const handleEdit = (e , idx )=>{
        e.preventDefault();

        setEditIdx(idx);
        setIsEditCard(true);


        setEditField({name: showCards[idx].name}) // 1.) on pressing edit btn , look in the showCards Array and set the edit field to the name,

    };

    const handleCancel =(e)=>{
        e.preventDefault();
        setIsEditCard(false);
        setEditIdx("");
    };

    const handleEditFieldChange = (e)=>{
        e.preventDefault();

        setEditField({
            ...editField,
            [e.target.name] : e.target.value
        });


        console.log(editField, 'editField')

    };


    const handleSubmit = (e)=>{
        e.preventDefault();
        // 2.) send over the edits
        props.submitEdit(editField , editIdx )

        setIsEditCard(false);
        setEditIdx("");

    };


    return(
        <React.Fragment>

            {showCards.map(( card, idx)=>{
                return(
                    <div className={'card-container'} key={'card'+idx}>

                        { editIdx === idx ?
                            //render edit inputs if card index to edit matches index of rendered card, display edit fields inputs
                            <React.Fragment>
                                <ul>
                                    <li>Product Name:

                                        <InputField name={'name'} value={ editField.name} onchange={handleEditFieldChange} />


                                    </li>
                                    <li>Price: <InputField name={'price'} value={editField.price} onchange={handleEditFieldChange} />  </li>
                                    {/*<li>{card.price}</li>*/}
                                    <li>{card.descrip}</li>
                                </ul>
                            </React.Fragment> :

                            //render cards by user
                            <div>
                                <ul>
                                    <li>Product Name: {card.name}</li>
                                    <li>Price : {card.price}</li>
                                    <li>Description: {card.descrip}</li>
                                </ul>
                            </div> }

                        {/*card actions*/}
                        <div>
                            <a onClick={(e)=> {
                                   //if in edit mode && card index to edit matches index of rendered card, show the edit input fields
                                   {isEditCard === true && editIdx === idx ? handleSubmit(e , editIdx) : handleEdit(e , idx ) }
                               }} >
                                {/*if in edit mode, change the name and function of the button*/}
                                {isEditCard === true && editIdx === idx ? 'Submit Changes' : 'Edit' }  </a>

                            {/*if in edit mode, display the cancel btn if user decides to back out*/}
                            {isEditCard === true && editIdx === idx ? <div>
                                <a onClick={handleCancel} >Cancel</a>

                            </div> : true }

                        </div>
                    </div>
                )
            })}

        </React.Fragment>
    )
};

const mapStateToProps = (state)=>({
    showCards : state.formReducer.showCards,
});


const mapDispatchToProps = {
    submitEdit : submitEdit
};



export default connect(mapStateToProps, mapDispatchToProps)(Card)