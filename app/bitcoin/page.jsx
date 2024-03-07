import Link from "next/link";
import React from "react";
import Team from "@/components/Team";
import Trending from "@/components/Trending";
import Tokenomics from "@/components/Tokenomics";
import Coin from "@/components/Coin";
import Performance from "@/components/Performance";
import Sentiment from "@/components/Sentiment";
import About from "@/components/About";
import SubNav from "@/components/SubNav";

const Bitcoin = () => {
  return (
    <section className="px-3 mt-4 sm:px-5">
      <section className="flex flex-col sm:flex-row gap-4">
        <div className="basis-3/4">
          <Coin />
          <SubNav/>
          <Performance/>
          <Sentiment/>
          <About/>
          <Tokenomics />
          <Team />
        </div>
        <div className="basis-1/4">
          <div className="h-fit bg-[#0052FE] text-center text-white flex flex-col items-center px-6 gap-6 py-6 rounded-lg">
            <h2 className="font-bold text-xl">
              Get Started with KoinX for FREE
            </h2>
            <p className="text-sm text-center font-[#F2F2F2]">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </p>
            <img src="/assets/getstarted.svg" alt="getStarted" />
            <Link
              href={"/getstarted"}
              className="bg-[#ffffff] px-6 py-2 text-black rounded-md"
            >
              Get Started for FREE
            </Link>
          </div>
          <Trending />
        </div>
      </section>
      <section></section>
    </section>
  );
};

export default Bitcoin;
