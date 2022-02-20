import * as React from 'react';

import SkillItem from './SkillItem';
import Frontend from '../../assets/frontend.svg';
import Backend from '../../assets/backend.svg';

const SkillList = () => {
  const skills = [
    {
      title: 'Front-end Developer',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      thumbnail: Frontend,
    },
    {
      title: 'Back-end Developer',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      thumbnail: Backend,
    },
    {
      title: 'UI Designer',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      thumbnail: Frontend,
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
          thumbnail={skill.thumbnail}
        />
      ))}
    </div>
  );
};

export default SkillList;
