import * as React from 'react';

import SkillItem from './SkillItem';

const SkillList = () => {
  const skills = [
    {
      title: 'Front-end Developer',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    },
    {
      title: 'Back-end Developer',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    },
    {
      title: 'UI Designer',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    },
  ];
  return (
    <div
      className="flex flex-wrap justify-around"
    >
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          index={index}
          title={skill.title}
          subtitle={skill.subtitle}
        />
      ))}
    </div>
  );
};

export default SkillList;
