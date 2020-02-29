import React from "react"

const SubStage = ({ headline }) => (
  <section className="h-sub-stage-mobile md:h-sub-stage-desktop w-100 flex justify-center items-center bg-sub bg-no-repeat bg-cover mb-12">
    <div className="font-display text-4xl md:text-6xl">{headline}</div>
  </section>
)

export default SubStage
