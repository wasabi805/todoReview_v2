import React from 'react';
import { connect } from "react-redux";

const Card = (props)=>{

    const arrayOfCards = Object.values(props.cardData);

    return(
        <React.Fragment>
                {arrayOfCards.map((data, idx)=>{
                    console.log(data.productNameInput);

                    return(

                      <div className={'card-container'}>
                          <ul key={'card-'+idx}  >

                              <li className={'card-data'}>
                                  <h6 className={'card-header'}> Product Name : </h6> <p>{data.productNameInput}</p>
                              </li>

                              <li className={'card-data'}>
                                  <h6 className={'card-header'}> Price : </h6> <p>{data.productPriceInput}</p>
                              </li>

                              <li className={'card-data'}>
                                  <h6 className={'card-header'}> Description : </h6><p>{data.productDescriptionInput}</p>
                              </li>

                          </ul>

                          <div className={'card-btn-actions'} >
                              <a href="/">Edit</a  >
                          </div>
                      </div>
                    )

                })}
        </React.Fragment>
    )
};

const mapDispatchToProps = (state)=>({

});



export default connect(mapDispatchToProps, null)(Card)