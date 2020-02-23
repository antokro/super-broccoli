import React from "react"

const Content = ({ headline, children }) => {
  const heading = headline ? (
    <h2 className="font-display text-4xl text-sb-turquoise text-center">
      {headline}
    </h2>
  ) : null

  return (
    <section className="px-10 md:px-40 py-10">
      {heading}
      {children}
    </section>
  )
}

export default Content
