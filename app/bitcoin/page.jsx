import Link from "next/link";
import React from "react";
import Team from "@/components/Team";
const Bitcoin = () => {
  return (
    <section className="px-5 mt-4">
      <section className="flex gap-4">
        <div className="basis-3/4">
            <Team/>
        </div>
        <div className="h-fit basis-1/4 bg-[#0052FE] text-center text-white flex flex-col items-center px-6 gap-6 py-6 rounded-lg">
          <h2 className="font-bold text-xl">Get Started with KoinX for FREE</h2>
          <p className="text-sm text-center">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
          <img src="/assets/getstarted.svg" alt="getStarted"/>
          <Link href={"/getstarted"} className="bg-[#ffffff] px-6 py-2 text-black rounded-md">Get Started for FREE</Link>
        </div>
      </section>
      <section></section>
    </section>
  );
};

export default Bitcoin;