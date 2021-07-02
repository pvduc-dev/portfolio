import * as React from "react"
import { FC } from "react"

interface SKillItemProps {
  index: number;
  title: string,
  subtitle: string;
}

const SkillItem: FC<SKillItemProps> = (props) => {
  const animationDelay = props.index * 100;
  return (
    <div
      className="flex-1 max-w-[350px] min-w-[315px]"
    >
      <div
        data-sal="slide-up"
        data-sal-delay={animationDelay}
        data-sal-easing="ease"
        className="my-4 px-4 py-6 bg-white rounded-md shadow-lg"
      >
        <div>
          <h3
            className="text-center text-black font-bold"
          >
            {props.title}
          </h3>
          <p
            className="mt-4 text-sm"
          >
            {props.subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillItem
