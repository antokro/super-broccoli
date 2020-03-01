import React from "react"
import Chip from "../components/chip"

const Skill = ({ headline, content }) => (
  <div className="py-12">
    <h3 className="text-xl text-sb-orange text-center mb-6 mt-8">{headline}</h3>
    <div className="h-32 w-100 flex justify-center items-center mb-6">
      <div className="rounded-full h-20 w-20 bg-yellow-400"></div>
    </div>
    <div className="py-5 text-center flex flex-wrap">
      {content.map(item => (
        <Chip key={item} content={item} />
      ))}
    </div>
  </div>
)

export default Skill
