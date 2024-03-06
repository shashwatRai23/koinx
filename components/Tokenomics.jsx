import React from "react";

const Tokenomics = () => {
  return (
    <div className="card ">
      <h1 className="heading_text">Tokenomics</h1>
      <div className="mt-2">
        <h2 className="text-lg font-semibold">Initial Distribution</h2>
        <div className="my-3 flex items-center gap-8">
          <img src="/assets/tokenomics.svg" alt="distribution"/>
          <div>
            <div className="flex items-center gap-2 ">
                <span className="rounded-full h-[12px] w-[12px] bg-[#0082FF]"></span>
                <span>Crowdsale Investors : 80%</span>
            </div>
            <div className="flex items-center gap-2 ">
                <span className="rounded-full h-[12px] w-[12px] bg-[#FAA002]"></span>
                <span>Foundations : 20%</span>
            </div>
          </div>
        </div>
        <p className="text-[#3E424A] mt-6">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
