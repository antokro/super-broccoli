import React from "react"
import Chip from "../components/chip"

const Skill = ({ headline, content }) => (
  <div className="">
    <h3 className="text-xl text-sb-orange text-center mb-6 mt-8">{headline}</h3>
    {content.map(item => (
      <Chip key={item} content={item} />
    ))}
  </div>
)

export default Skill
