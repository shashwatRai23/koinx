import React from "react";
import TeamMember from "@/utils/TeamMember";
const Team = () => {
  return (
    <div className="card mt-3">
      <h2 className="heading_text">Team</h2>
      <p className="mt-4 mb-3 text-[#3E424A]">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className="flex flex-col gap-3">
        <TeamMember name="John Smith" imgsrc="/assets/t1.svg"/>
        <TeamMember name="Ella Willams" imgsrc="/assets/t2.svg"/>
        <TeamMember name="John Smith" imgsrc="/assets/t3.svg"/>
      </div>
    </div>
  );
};

export default Team;
