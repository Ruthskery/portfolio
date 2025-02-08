import React from "react";

interface Props {
  title: string;
  year: string;
}

const SkillsItem = ({ title, year }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span
        className="px-[2rem] py-[1rem] text-[#55e6a5] font-bold text-[18px] border-2 border-[#55e6a5] 
                   rounded-md text-center hover:bg-[#55e6a5] hover:text-black transition-all duration-300"
      >
        {year}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos aliquam maiores quia commodi totam aliquid assumenda impedit officiis tempora voluptatibus molestias quis, ex voluptas dicta est iste esse reiciendis perspiciatis.
      </p>
    </div>
  );
};

export default SkillsItem;
