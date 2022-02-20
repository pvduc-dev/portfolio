import * as React from "react"
import { FC } from "react"

interface SKillItemProps {
  index: number;
  title: string,
  subtitle: string;
  thumbnail: any;
}

const SkillItem: FC<SKillItemProps> = ({index, title, thumbnail, subtitle}) => {
  const Thumbnail = thumbnail;
  return (
    <div
      data-sal="slide-right"
      data-sal-delay={index * 200}
      data-sal-easing="ease"
      className="bg-[#0F0D1E] rounded-md"
    >
      <div>
        <div
          className="py-1.5"
        >
          <div
            className="px-4 py-3 text-[#E5E7EB] font-medium"
          >
            {title}
          </div>
          <hr className="border-[#1B182F]"/>
          <div
            className="px-4 py-2 text-[#84809F]"
          >
            <div
              className="p-6"
            >
              <Thumbnail/>
            </div>
            <div className="py-3">
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillItem
