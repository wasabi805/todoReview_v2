import React from "react";
import { connect } from "react-redux";



import { updateInput , getCardDataAndClearForm,} from "../../Logic/actions/sample-actions";

import InputField from "../form/input-field";
import Card from '../cards/card'

const HeroPresenter = props => {

  const {productNameInput, productPriceInput, productDescriptionInput , showCards} = props;

  const handleAddButton =(e)=>{
      e.preventDefault();

      const cardData ={
          productNameInput, productPriceInput , productDescriptionInput
      };

      //make sure to put props before the call or async function wont fire.
      props.getCardData(cardData);
  };

  return (
    <section id={"hero"}>
      <div className={"form"}>
        <ul className={"input-container"}>
          <li>
            Product Name :{" "}
            <span>
              {" "}
              <InputField
                name={"productNameInput"}
                value={productNameInput}
                onchange={props.updateInput}
              />{" "}
            </span>{" "}
          </li>
          <li>
            Price :{" "}
            <span>
              {" "}
              <InputField
                name={"productPriceInput"}
                value={productPriceInput}
                onchange={props.updateInput}
              />{" "}
            </span>{" "}
          </li>
          <li>
            Description :{" "}
            <span>
              {" "}
              <InputField
                name={"productDescriptionInput"}
                value={productDescriptionInput}
                onchange={props.updateInput}
              />{" "}
            </span>{" "}
          </li>
        </ul>

        <div className={"hor-btn-container"}>
          <a className={"btn"} href="" onClick={handleAddButton}>
            {" "}
            Add{" "}
          </a>
        </div>
      </div>

      <div className={"card-wrapper"}>
        <Card cardData={showCards} />
      </div>

    </section>
  );
};

const mapStateToProps = state => {
  return{
    productNameInput: state.heroReducer.productNameInput,
    productDescriptionInput: state.heroReducer.productDescriptionInput,
    productPriceInput: state.heroReducer.productPriceInput,
    showCards: state.heroReducer.showCards
  }
};


const mapDispatchToProps = {
  updateInput,
  getCardData: getCardDataAndClearForm,
};



export default connect(mapStateToProps, mapDispatchToProps)(HeroPresenter);
