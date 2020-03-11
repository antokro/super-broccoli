import React from "react"
import Chip from "../components/chip"
import Computer from "../icons/Computer"
import Css from "../icons/Css"
import Folder from "../icons/Folder"
import Smartphone from "../icons/Smartphone"
import Html from "../icons/Html"
import Browser from "../icons/Browser"

const Skill = ({ headline, content }) => (
  <div className="py-12">
    <h3 className="text-xl text-sb-orange text-center mb-6 mt-8">{headline}</h3>
    <div className="h-32 w-100 flex justify-center items-center mb-6">
      <div className="rounded-full relative flex items-center justify-center h-32 w-32 bg-sb-grey-light tech-animation">
        <Computer />
        <Css />
        <Folder />
        <Smartphone />
        <Html />
        <Browser />
      </div>
    </div>
    <div className="py-5 text-center flex flex-wrap">
      {content.map(item => (
        <Chip key={item} content={item} />
      ))}
    </div>
  </div>
)

export default Skill
