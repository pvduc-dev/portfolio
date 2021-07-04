import * as React from 'react';

import SkillItem from './SkillItem';

const SkillList = () => {
  const skills = [
    {
      title: 'Front-end Developer',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: 'https://res.cloudinary.com/pv-duc/image/upload/v1625251778/responsive-design.svg'
    },
    {
      title: 'Back-end Developer',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: 'https://res.cloudinary.com/pv-duc/image/upload/v1625251779/code.svg'
    },
    {
      title: 'UI Designer',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: 'https://res.cloudinary.com/pv-duc/image/upload/v1625251778/graphic-design.svg'
    },
  ];
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 xl:gap-8"
    >
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          index={index}
          title={skill.title}
          subtitle={skill.subtitle}
          image={skill.image}
        />
      ))}
    </div>
  );
};

export default SkillList;
