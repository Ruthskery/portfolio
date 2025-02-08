import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-start">
        <div className="space-y-[2rem]">
          <SkillsItem title="React Developer" year="2020 - 2020" />
          <SkillsItem title="Python Developer" year="2020 - 2020" />
          <SkillsLanguage
            skill1="HTML"
            skill2="CSS"
            skill3="Python"
            level1="w-[88%]"
            level2="w-[91%]"
            level3="w-[97%]"
          />
        </div>
        <div className="space-y-[2rem]">
          <SkillsItem title="JS Developer" year="2020 - 2020" />
          <SkillsItem title="Web Developer" year="2020 - 2020" />
          <SkillsLanguage
            skill1="ReactJS"
            skill2="NextJS"
            skill3="Laravel"
            level1="w-[87%]"
            level2="w-[77%]"
            level3="w-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
