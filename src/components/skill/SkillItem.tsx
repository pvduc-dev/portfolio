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
      className="px-4 bg-[#0F0D1E] rounded-md"
    >
      <div>
        <div
          className="mx-auto py-1.5 w-[20rem] lg:w-[14rem] xl:w-[16rem]"
        >
          <div className="py-3.5 border-none border-b border-[#1D1A32]">
            <h3
              className="text-center text-[#E5E7EB] font-bold"
            >
              {title}
            </h3>
          </div>
          <hr className="border-none border border-white"/>
          <p
            className="text-[#84809F]"
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillItem
