import React from "react";

const HeroPresenter = () => {
  return (
    <section id={"hero"}>
      <h1 className={"title"}>WELCOME</h1>

      <div className={"hero-bg"}>
        <img
          src={
            "https://timocampobucketstuff.s3.amazonaws.com/cars-sports-tuning-toyota-supra-1920x1080-61716-web.jpg"
          }
          alt={""}
        />
      </div>

      <div className={"overlay"} />
    </section>
  );
};

export default HeroPresenter;
