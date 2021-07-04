import * as React from "react"
import { FC } from "react"

interface SKillItemProps {
  index: number;
  title: string,
  subtitle: string;
  image: string;
}

const SkillItem: FC<SKillItemProps> = ({index, title, image, subtitle}) => {
  return (
    <div
      data-sal="slide-right"
      data-sal-delay={index * 200}
      data-sal-easing="ease"
      className="my-4 px-4 py-8 bg-white rounded-md shadow-lg"
    >
      <div>
        <div
          className="flex justify-center"
        >
          <img
            src={image}
            alt={title}
            width="80"
            height="80"
            className="w-[5rem] h-[5rem]"
          />
        </div>
        <div
          className="mx-auto mt-8 w-[20rem] lg:w-[14rem] xl:w-[16rem]"
        >
          <h3
            className="text-center text-black font-bold"
          >
            {title}
          </h3>
          <p
            className="mt-2"
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillItem
