import React from "react";
import letsGoPlaces from '../../assets/images/toyota-lets-go-places.png';
import classicBadge from '../../assets/images/classic-toyota-logo-500x501.jpg'
import whiteToyotaBadge from '../../assets/images/HeaderLogos-ToyotaRacing.png';
//test
const FooterPresenter = props => {
  return (
    <footer id={"footer"}>
      <section className={"container"}>
        <div className={"row"}>
          <div className={"col three"}>
            <h4 className={"footer-section-title"}>NAVIGATION</h4>

            <ul className={"footer-nav"}>
              <li>
                <a href="">PARTS</a>
              </li>
              <li>
                <a href="">HISTORY</a>
              </li>
              <li>
                <a href="">RACING</a>
              </li>
              <li>
                <a href="">GEAR</a>
              </li>
            </ul>

              <div className={'badge-container'}>
                  <img className={'lets-go-places'} src={letsGoPlaces} alt={''}/>
                  <img className={'classic-badge'}  src={classicBadge} alt={''}/>
                  <img className={'toyota-racing'} src={whiteToyotaBadge} alt=""/>
              </div>
          </div>



          <div className={"col three"}>
            <h4 className={"footer-section-title"}>FACEBOOK</h4>
          </div>

          <div className={"col three"}>
            <h4 className={"footer-section-title"}>TWITTER</h4>
          </div>

          <div className={"col three"}>
            <h4 className={"footer-section-title white "}>SUBSCRIBE</h4>
            <p className={'subscribe white'}>Stay updated on TRD and Toyota Racing info</p>
            <a className={'footer-subscribe-button'} href="">Subscribe</a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterPresenter;
